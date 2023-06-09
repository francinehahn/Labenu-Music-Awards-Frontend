import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { useRequestData } from "../../hooks/useRequestData"
import { PhotoSection } from "./style"
import { RiImageAddLine } from "react-icons/ri"
import { baseUrl } from "../../constants/baseUrl"


interface data {
    id: string,
    photo_url: string,
    week_day: string,
    created_at: Date
}

export function Photos () {
    const token = localStorage.getItem("token")
    const [reload, setReload] = useState(false)
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData(`${baseUrl}photos?weekDay=friday`, reload)
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData(`${baseUrl}photos?weekDay=saturday`, reload)
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData(`${baseUrl}photos?weekDay=sunday`, reload)
    const [isLoadingUser, dataUser] = useRequestData(`${baseUrl}users/account`, reload, token)

    const navigate = useNavigate()

    const handlePhotoDeletion = (id: string) => {
        if (!dataUser || (dataUser && dataUser.role !== "ADMIN")) {
            return
        } else {
            const deletePhotoConfirmation = confirm("Você gostaria de deletar essa foto?")
            
            if (deletePhotoConfirmation) {
                axios.delete(`${baseUrl}photos/${id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(() => {
                    alert("Foto deletada com sucesso!")
                    setReload(!reload)
                }).catch(error => alert(error.response.data))
            }
        }
    }

    const renderDataFriday = dataFriday && dataFriday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival na sexta-feira" onClick={() => handlePhotoDeletion(item.id)}/>
    })

    const renderDataSaturday = dataSaturday && dataSaturday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival no sábado" onClick={() => handlePhotoDeletion(item.id)}/>
    })

    const renderDataSunday = dataSunday && dataSunday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival na sexta-feira" onClick={() => handlePhotoDeletion(item.id)}/>
    })

    return (
        <>
            <Header/>
            
            <PhotoSection>
                {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && <button onClick={() => navigate("/cadastrar-foto")}><RiImageAddLine/></button>}
                {(isLoadingFriday || isLoadingSaturday || isLoadingSunday) && <span> <Loading color="black"/> </span>}
                
                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataFriday && (
                    <>
                        <h3>Sexta-feira</h3>
                        <div>{renderDataFriday}</div>
                    </>
                )}
                {!isLoadingFriday && !dataFriday && errorFriday && <p>{errorFriday}</p>}

                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataSaturday && (
                    <>
                        <h3>Sábado</h3>
                        <div>{renderDataSaturday}</div>
                    </>
                )}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <p>{errorSaturday}</p>}

                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataSunday && (
                    <>
                        <h3>Domingo</h3>
                        <div>{renderDataSunday}</div>
                    </>
                )}
                {!isLoadingSunday && !dataSunday && errorSunday && <p>{errorSunday}</p>}
            </PhotoSection>
            
            <Footer/>
        </>
    )
}