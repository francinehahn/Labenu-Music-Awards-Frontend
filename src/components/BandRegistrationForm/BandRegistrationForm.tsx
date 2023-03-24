import axios from "axios"
import { useState } from "react"
import { validateName } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { Loading } from "../Loading/Loading"
import { FormSection } from "./style"


export function BandRegistrationForm () {
    const token = localStorage.getItem("token")
    const [form, onChange] = useForm({bandName: "", musicGenre: "", responsible: ""})
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
        
        if (form.bandName.length < 3) {
            setNameError("O nome da banda deve ter pelo menos 2 caracteres.")
            setIsLoading(false)
        }
        if (!validateName(form.musicGenre)) {
            setMusicGenreError("O gênero musical deve ter pelo menos 2 caracteres.")
            setIsLoading(false)
        }
        if (!validateName(form.responsible)) {
            setResponsibleError("O nome do responsável pela banda deve ter pelo menos 2 caracteres.")
            setIsLoading(false)
        }

        if (form.bandName.length >= 3 && validateName(form.musicGenre) && validateName(form.responsible)) {
            axios.post('https://lama-fctv.onrender.com/bands/create', form, {
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

        return
    }

    return (
        <FormSection onSubmit={handleBandRegistration}>
            <div>
                <label htmlFor="name">Nome da banda</label>
                <input type={'text'} placeholder="Capital Inicial" name="name" value={form.name} onChange={onChange}/>
                <p>{nameError}</p>
            </div>

            <div>
                <label htmlFor="musicGenre">Gênero musical</label>
                <input type={'text'} placeholder="Rock" name="musicGenre" value={form.musicGenre} onChange={onChange}/>
                <p>{musicGenreError}</p>
            </div>

            <div>
                <label htmlFor="responsible">Responsável pela banda</label>
                <input type={'text'} placeholder="João Soares" name="responsible" value={form.responsible} onChange={onChange}/>
                <p>{responsibleError}</p>
            </div>

            <p id="error">{axiosError}</p>
            <p id="successMessage">{successMessage}</p>

            <button>{isLoading? <Loading color="orange"/> : 'Registrar banda'}</button>
        </FormSection>
    )
}