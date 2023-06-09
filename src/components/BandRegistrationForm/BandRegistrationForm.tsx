import { useState } from "react"
import axios from "axios"

import { validateBandName, validateUserName } from "../../constants/constants"
import { baseUrl } from "../../constants/baseUrl"

import { useForm } from "../../hooks/useForm"
import { Loading } from "../Loading/Loading"

import { AxiosError, FormSection, SuccessMessage } from "./style"


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
            setIsLoadingBand(false)
        }
        if (!validateBandName(bandForm.musicGenre)) {
            setMusicGenreError("O gênero musical deve ter pelo menos 3 caracteres.")
            setIsLoadingBand(false)
        }
        if (!validateUserName(bandForm.responsible)) {
            setResponsibleError("Informe o nome completo do responsável sem o uso de acentuação.")
            setIsLoadingBand(false)
        }

        if (validateBandName(bandForm.name) && validateBandName(bandForm.musicGenre) && validateUserName(bandForm.responsible)) {
            axios.post(`${baseUrl}bands/create`, bandForm, {
                headers: {
                    Authorization: token
                }
                }).then(() => {
                    setSuccessMessage("Banda registrada com sucesso!")
                    props.setReload(!props.reload)
                    clearInputs()
                    setIsLoadingBand(false)
                }).catch(error => {
                    setAxiosError(error.response.data)
                    setIsLoadingBand(false)
            })
        }
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

            <AxiosError>{axiosError}</AxiosError>
            <SuccessMessage>{successMessage}</SuccessMessage>

            <button>{isLoadingBand? <Loading color="orange"/> : 'Registrar banda'}</button>
        </FormSection>
    )
}