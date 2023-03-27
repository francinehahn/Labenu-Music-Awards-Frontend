import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { useRequestData } from "../../hooks/useRequestData"
import { PhotoSection } from "./style"


interface data {
    id: string,
    photo_url: string,
    week_day: string,
    created_at: Date
}

export function Photos () {
    const token = localStorage.getItem("token")
    const [reload, setReload] = useState(false)
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=friday", reload)
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=saturday", reload)
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=sunday", reload)
    const [isLoadingUser, dataUser] = useRequestData('https://lama-fctv.onrender.com/users/account', reload, token)

    const navigate = useNavigate()

    const handlePhotoDeletion = (id: string) => {
        if (!dataUser || (dataUser && dataUser.role !== "ADMIN")) {
            return
        } else {
            const deletePhotoConfirmation = confirm("Você gostaria de deletar essa foto?")
            
            if (deletePhotoConfirmation) {
                axios.delete(`https://lama-fctv.onrender.com/photos/${id}`, {
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
                {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && <button onClick={() => navigate("/cadastrar-foto")}>Postar foto</button>}
                {(isLoadingFriday || isLoadingSaturday || isLoadingSunday) && <span> <Loading color="black"/> </span>}
                
                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataFriday && (
                    <>
                        <h2>Sexta-feira</h2>
                        <div>{renderDataFriday}</div>
                    </>
                )}
                {!isLoadingFriday && !dataFriday && errorFriday && <p>{errorFriday}</p>}

                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataSaturday && (
                    <>
                        <h2>Sábado</h2>
                        <div>{renderDataSaturday}</div>
                    </>
                )}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <p>{errorSaturday}</p>}

                {!isLoadingFriday && !isLoadingSaturday && !isLoadingSunday && dataSunday && (
                    <>
                        <h2>Domingo</h2>
                        <div>{renderDataSunday}</div>
                    </>
                )}
                {!isLoadingSunday && !dataSunday && errorSunday && <p>{errorSunday}</p>}
            </PhotoSection>
            
            <Footer/>
        </>
    )
}