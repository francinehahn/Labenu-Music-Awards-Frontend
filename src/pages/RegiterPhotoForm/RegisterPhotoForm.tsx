import { useState } from "react"

import axios from "axios"

import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"

import { validateImageUrl } from "../../constants/constants"
import { baseUrl } from "../../constants/baseUrl"

import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"

import { Error, LoadingDiv, PhotoForm, SuccessMessage, Unauthorized } from "./style"

export function RegisterPhotoForm () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const [isLoadingUser, dataUser] = useRequestData(`${baseUrl}users/account`, true, token)
    const [isLoadingPhoto, setIsLoadingPhoto] = useState(false)
    const [photoForm, onChangePhoto, clearInputs] = useForm({photoUrl: "", weekDay: ""})
    const [photoError, setPhotoError] = useState("")
    const [axiosPhotoError, setAxiosPhotoError] = useState("")
    const [successPhotoMessage, setSuccessPhotoMessage] = useState("")


    const handlePhotoRegistration = (e: any) => {
        e.preventDefault()
        setIsLoadingPhoto(true)
        setPhotoError("")
        setAxiosPhotoError("")

        if (!validateImageUrl(photoForm.photoUrl)) {
            setPhotoError("Url inválida.")
            setIsLoadingPhoto(false)
        }

        if (validateImageUrl(photoForm.photoUrl)) {
            axios.post(`${baseUrl}photos/create`, photoForm, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoadingPhoto(false)
                setSuccessPhotoMessage("Foto postada com sucesso!")
                clearInputs()
            }).catch(error => {
                setIsLoadingPhoto(false)
                setAxiosPhotoError(error.response.data)
            })
        }
    }

    return (
        <>
            <Header/>

            {isLoadingUser && <LoadingDiv><Loading color="black"/></LoadingDiv>}
            {!isLoadingUser && dataUser && dataUser.role !== "ADMIN" && <Unauthorized>Usuário não autorizado.</Unauthorized>}

            {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && (
                <PhotoForm onSubmit={handlePhotoRegistration}>
                    <div>
                        <label htmlFor="photoUrl">Url da foto</label>
                        <input type={'text'} placeholder="www.foto.com.br" name="photoUrl" value={photoForm.photoUrl} onChange={onChangePhoto}/>
                        <p>{photoError}</p>
                    </div>
                    
                    <div>
                        <label htmlFor="weekDay">Dia do evento</label>
                        <select name="weekDay" value={photoForm.weekDay} onChange={onChangePhoto}>
                            <option>Selecione</option>
                            <option value="friday">Sexta-feira</option>
                            <option value="saturday">Sábado</option>
                            <option value="sunday">Domingo</option>
                        </select>
                    </div>

                    <Error>{axiosPhotoError}</Error>
                    <SuccessMessage>{successPhotoMessage}</SuccessMessage>

                    <button>{isLoadingPhoto? <Loading color="orange"/> : 'Postar'}</button>
                </PhotoForm>
            )}
        </>
    )
}