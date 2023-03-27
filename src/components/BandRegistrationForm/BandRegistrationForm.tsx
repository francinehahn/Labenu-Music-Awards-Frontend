import axios from "axios"
import { useState } from "react"
import { validateBandName, validateUserName } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { Loading } from "../Loading/Loading"
import { FormSection } from "./style"

interface bandProps {
    reload: boolean,
    setReload: any
}

export function BandRegistrationForm (props: bandProps) {
    const token = localStorage.getItem("token")
    const [bandForm, bandOnChange, clearInputs] = useForm({name: "", musicGenre: "", responsible: ""})
    const [isLoadingBand, setIsLoadingBand] = useState(false)
    const [nameError, setNameError] = useState("")
    const [musicGenreError, setMusicGenreError] = useState("")
    const [responsibleError, setResponsibleError] = useState("")
    const [axiosError, setAxiosError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleBandRegistration = (e: any) => {
        e.preventDefault()
        setIsLoadingBand(true)
        setNameError("")
        setMusicGenreError("")
        setResponsibleError("")
        setAxiosError("")
        
        if (!validateBandName(bandForm.name)) {
            setNameError("O nome da banda deve ter pelo menos 3 caracteres.")
        }
        if (!validateBandName(bandForm.musicGenre)) {
            setMusicGenreError("O gênero musical deve ter pelo menos 3 caracteres.")
        }
        if (!validateUserName(bandForm.responsible)) {
            setResponsibleError("Informe o nome completo do responsável sem o uso de acentuação.")
        }

        if (validateBandName(bandForm.name) && validateBandName(bandForm.musicGenre) && validateUserName(bandForm.responsible)) {
            axios.post('https://lama-fctv.onrender.com/bands/create', bandForm, {
                headers: {
                    Authorization: token
                }
                }).then(() => {
                    setIsLoadingBand(false)
                    setSuccessMessage("Banda registrada com sucesso!")
                    props.setReload(!props.reload)
                    clearInputs()
                }).catch(error => {
                    setIsLoadingBand(false)
                    setAxiosError(error.response.data)
            })
        }

        setIsLoadingBand(false)
        return
    }

    return (
        <FormSection onSubmit={handleBandRegistration}>
            <div>
                <label htmlFor="name">Nome da banda</label>
                <input type={'text'} placeholder="Capital Inicial" name="name" value={bandForm.name} onChange={bandOnChange}/>
                <p>{nameError}</p>
            </div>

            <div>
                <label htmlFor="musicGenre">Gênero musical</label>
                <input type={'text'} placeholder="Rock" name="musicGenre" value={bandForm.musicGenre} onChange={bandOnChange}/>
                <p>{musicGenreError}</p>
            </div>

            <div>
                <label htmlFor="responsible">Responsável pela banda</label>
                <input type={'text'} placeholder="João Soares" name="responsible" value={bandForm.responsible} onChange={bandOnChange}/>
                <p>{responsibleError}</p>
            </div>

            <p id="error">{axiosError}</p>
            <p id="successMessage">{successMessage}</p>

            <button>{isLoadingBand? <Loading color="orange"/> : 'Registrar banda'}</button>
        </FormSection>
    )
}