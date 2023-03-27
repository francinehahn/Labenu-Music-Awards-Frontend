import axios from "axios"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { validateImageUrl } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { LoadingDiv, PhotoForm, Unauthorized } from "./style"


export function RegisterPhotoForm () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const [isLoadingUser, dataUser] = useRequestData('https://lama-fctv.onrender.com/users/account', token)
    const [isLoadingPhoto, setIsLoadingPhoto] = useState(false)
    const [photoForm, onChangePhoto] = useForm({photoUrl: "", weekDay: ""})
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
        }

        if (validateImageUrl(photoForm.photoUrl)) {
            axios.post('https://lama-fctv.onrender.com/photos/create', photoForm, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoadingPhoto(false)
                setSuccessPhotoMessage("Foto postada com sucesso!")
            }).catch(error => {
                setIsLoadingPhoto(false)
                setAxiosPhotoError(error.response.data)
            })
        }

        setIsLoadingPhoto(false)
        return
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

                    <p id="error">{axiosPhotoError}</p>
                    <p id="successMessage">{successPhotoMessage}</p>

                    <button>{isLoadingPhoto? <Loading color="orange"/> : 'Postar'}</button>
                </PhotoForm>
            )}
        </>
    )
}