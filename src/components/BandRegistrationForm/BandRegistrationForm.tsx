import axios from "axios"
import { useState } from "react"
import { validateBandName, validateUserName } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { Loading } from "../Loading/Loading"
import { FormSection } from "./style"


export function BandRegistrationForm () {
    const token = localStorage.getItem("token")
    const [bandForm, bandOnChange] = useForm({bandName: "", musicGenre: "", responsible: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [nameError, setNameError] = useState("")
    const [musicGenreError, setMusicGenreError] = useState("")
    const [responsibleError, setResponsibleError] = useState("")
    const [axiosError, setAxiosError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleBandRegistration = (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setNameError("")
        setMusicGenreError("")
        setResponsibleError("")
        setAxiosError("")
        
        if (!validateBandName(bandForm.bandName)) {
            setNameError("O nome da banda deve ter pelo menos 3 caracteres.")
        }
        if (!validateBandName(bandForm.musicGenre)) {
            setMusicGenreError("O gênero musical deve ter pelo menos 3 caracteres.")
        }
        if (!validateUserName(bandForm.responsible)) {
            setResponsibleError("Informe o nome completo do responsável.")
        }

        if (validateBandName(bandForm.bandName) && validateBandName(bandForm.musicGenre) && validateUserName(bandForm.responsible)) {
            axios.post('https://lama-fctv.onrender.com/bands/create', bandForm, {
                headers: {
                    Authorization: token
                }
                }).then(() => {
                    setIsLoading(false)
                    setSuccessMessage("Banda registrada com sucesso!")
                }).catch(error => {
                    setIsLoading(false)
                    setAxiosError(error.response.data)
            })
        }

        setIsLoading(false)
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

            <button>{isLoading? <Loading color="orange"/> : 'Registrar banda'}</button>
        </FormSection>
    )
}