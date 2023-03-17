import { Header } from "../../components/Header/Header"
import { HomeSection } from "./style"
import imgdesktop from "../../images/img-home-desktop.png" 
import { Bands } from "../../components/Bands/Bands"
import { useRequestData } from "../../hooks/useRequestData"

interface concert {
    id: string,
    week_day: string,
    start_time: string,
    end_time: string,
    name: string,
    music_genre: string
}

export function Home () {
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData("https://lama-fctv.onrender.com/concerts?weekDay=friday")
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData("https://lama-fctv.onrender.com/concerts?weekDay=saturday")
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData("https://lama-fctv.onrender.com/concerts?weekDay=sunday")

    const fridayConcerts = dataFriday && dataFriday.map((item: concert, index: number) => {
        return <Bands key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    const saturdayConcerts = dataSaturday && dataSaturday.map((item: concert, index: number) => {
        return <Bands key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    const sundayConcerts = dataSunday && dataSunday.map((item: concert, index: number) => {
        return <Bands key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    return (
        <>
            <Header/>
            <HomeSection>
                <img src={imgdesktop}/>

                <div id="div-home">
                    <h2>Atrações confirmadas:</h2>

                    <h3 id="title-week-day">Sexta-feira</h3>
                    {isLoadingFriday && <p>Carregando...</p>}
                    {!isLoadingFriday && dataFriday && <div>{fridayConcerts}</div>}
                    {!isLoadingFriday && !dataFriday && errorFriday && <p>{errorFriday}</p>}

                    <h3 id="title-week-day">Sábado</h3>
                    {isLoadingSaturday && <p>Carregando...</p>}
                    {!isLoadingSaturday && dataSaturday && <div>{saturdayConcerts}</div>}
                    {!isLoadingSaturday && !dataSaturday && errorSaturday && <p>{errorSaturday}</p>}

                    <h3 id="title-week-day">Domingo</h3>
                    {isLoadingSunday && <p>Carregando...</p>}
                    {!isLoadingSunday && dataSunday && <div>{sundayConcerts}</div>}
                    {!isLoadingSunday && !dataSunday && errorSunday && <p>{errorSunday}</p>}
                </div>
            </HomeSection>
        </>
    )
}