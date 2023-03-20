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
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=friday")
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=saturday")
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData("https://lama-fctv.onrender.com/photos?weekDay=sunday")

    const renderDataFriday = dataFriday && dataFriday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival na sexta-feira"/>
    })

    const renderDataSaturday = dataSaturday && dataSaturday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival no sábado"/>
    })

    const renderDataSunday = dataSunday && dataSunday.map((item: data) => {
        return <img key={item.id} src={item.photo_url} alt="Foto do festival na sexta-feira"/>
    })

    return (
        <>
            <Header/>
            
            <PhotoSection>
                <h2>Sexta-feira</h2>
                {isLoadingFriday && <Loading color="black"/>}
                {!isLoadingFriday && dataFriday && <div>{renderDataFriday}</div>}
                {!isLoadingFriday && !dataFriday && errorFriday && <p>{errorFriday}</p>}

                <h2>Sábado</h2>
                {isLoadingSaturday && <Loading color="black"/>}
                {!isLoadingSaturday && dataSaturday && <div>{renderDataSaturday}</div>}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <p>{errorSaturday}</p>}

                <h2>Domingo</h2>
                {isLoadingSunday && <Loading color="black"/>}
                {!isLoadingSunday && dataSunday && <div>{renderDataSunday}</div>}
                {!isLoadingSunday && !dataSunday && errorSunday && <p>{errorSunday}</p>}
            </PhotoSection>
            
            <Footer/>
        </>
    )
}