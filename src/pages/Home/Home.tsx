import { Header } from "../../components/Header/Header"
import { HomeSection } from "./style"
import imgdesktop from "../../images/img-home-desktop.png"
import imgMobile from "../../images/img-home-mobile.png"
import { BandCard } from "../../components/BandCard/BandCard"
import { useRequestData } from "../../hooks/useRequestData"
import { Footer } from "../../components/Footer/Footer"
import { Loading } from "../../components/Loading/Loading"
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../../constants/baseUrl"

interface concert {
    id: string,
    week_day: string,
    start_time: string,
    end_time: string,
    name: string,
    music_genre: string
}

export function Home () {
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData(`${baseUrl}concerts?weekDay=friday`, true)
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData(`${baseUrl}concerts?weekDay=saturday`, true)
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData(`${baseUrl}concerts?weekDay=sunday`, true)

    const navigate = useNavigate()

    const fridayConcerts = dataFriday && dataFriday.map((item: concert, index: number) => {
        return <BandCard key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    const saturdayConcerts = dataSaturday && dataSaturday.map((item: concert, index: number) => {
        return <BandCard key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    const sundayConcerts = dataSunday && dataSunday.map((item: concert, index: number) => {
        return <BandCard key={index} bandName={item.name} startTime={item.start_time} endTime={item.end_time}/>
    })

    return (
        <>
            <Header/>

            <HomeSection>
                <img id="imgDesktop" src={imgdesktop} alt="Imagem de um show"/>
                <img id="imgMobile" src={imgMobile} alt="Imagem de um show"/>

                <section>
                    <div className="div-home">
                        <h3 className="title-week-day">Sexta-feira</h3>
                        {isLoadingFriday && <Loading color="black"/>}
                        {!isLoadingFriday && dataFriday && <div>{fridayConcerts}</div>}
                        {!isLoadingFriday && !dataFriday && errorFriday && <p>{errorFriday}</p>}
                    </div>

                    <div className="div-home">
                        <h3 className="title-week-day">Sábado</h3>
                        {isLoadingSaturday && <Loading color="black"/>}
                        {!isLoadingSaturday && dataSaturday && <div>{saturdayConcerts}</div>}
                        {!isLoadingSaturday && !dataSaturday && errorSaturday && <p>{errorSaturday}</p>}
                    </div>

                    <div className="div-home">
                        <h3 className="title-week-day">Domingo</h3>
                        {isLoadingSunday && <Loading color="black"/>}
                        {!isLoadingSunday && dataSunday && <div>{sundayConcerts}</div>}
                        {!isLoadingSunday && !dataSunday && errorSunday && <p>{errorSunday}</p>}
                    </div>
                </section>

                <button onClick={() => navigate("/ingressos")}>Ingressos</button>
            </HomeSection>

            <Footer/>
        </>
    )
}