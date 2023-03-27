import { useState, useEffect, useRef } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { TicketCard } from "../../components/TicketCard/TicketCard"
import { useRequestData } from "../../hooks/useRequestData"
import { TicketsSection } from "./style"
import ticketFriday from "../../images/ticket-friday.png"
import ticketSaturday from "../../images/ticket-saturday.png"
import ticketSunday from "../../images/ticket-sunday.png"
import {IoIosArrowDroprightCircle} from "react-icons/io"
import {IoIosArrowDropleftCircle} from "react-icons/io"

interface ticket {
    id: string,
    ticket_name: string,
    price: number,
    tickets_available: number,
    tickets_sold: number,
    week_day: string,
    start_time: Date,
    end_time: Date,
    band_name: string,
    music_genre: string
}

export function Tickets () {
    const [reload, setReload] = useState(true)
    let productsInCart = localStorage.getItem("products")
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=friday", true)
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=saturday", true)
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=sunday", true)
    const carouselFriday = useRef<any>(null)
    const carouselSaturday = useRef<any>(null)
    const carouselSunday = useRef<any>(null)

    useEffect(() => {
        productsInCart = localStorage.getItem("products")
    }, [reload])

    const renderdataFriday = dataFriday && dataFriday.map((item: ticket) => {
        return <TicketCard
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketFriday}
                    reload={reload}
                    setReload={setReload}
                />
    })

    const renderdataSaturday = dataSaturday && dataSaturday.map((item: ticket) => {
        return <TicketCard
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketSaturday}
                    reload={reload}
                    setReload={setReload}
                />
    })

    const renderdataSunday = dataSunday && dataSunday.map((item: ticket) => {
        return <TicketCard
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketSunday}
                    reload={reload}
                    setReload={setReload}
                />
    })

    const handleLeftClickFri = () => {
        carouselFriday.current.scrollLeft -= carouselFriday.current.offsetWidth
    }

    const handleRightClickFri = () => {
        carouselFriday.current.scrollLeft += carouselFriday.current.offsetWidth
    }

    const handleLeftClickSat = () => {
        carouselSaturday.current.scrollLeft -= carouselSaturday.current.offsetWidth
    }

    const handleRightClickSat = () => {
        carouselSaturday.current.scrollLeft += carouselSaturday.current.offsetWidth
    }

    const handleLeftClickSun = () => {
        carouselSunday.current.scrollLeft -= carouselSunday.current.offsetWidth
    }

    const handleRightClickSun = () => {
        carouselSunday.current.scrollLeft += carouselSunday.current.offsetWidth
    }

    return (
        <>
            <Header/>

            <TicketsSection>
                {(isLoadingFriday && isLoadingSaturday && isLoadingSunday) && <div id="loading"><Loading color="black"/></div>}
                {!isLoadingFriday && dataFriday && (
                    <div className="ticket-div-wrapper">
                        <button className="buttonScroll" onClick={handleLeftClickFri}><IoIosArrowDropleftCircle/></button>
                        <div className="ticket-div" ref={carouselFriday}>{renderdataFriday}</div>
                        <button className="buttonScroll" onClick={handleRightClickFri}><IoIosArrowDroprightCircle/></button>
                    </div>
                )}
                {!isLoadingFriday && !dataFriday && errorFriday && <p className="error">{errorFriday}</p>}

                {!isLoadingSaturday && dataSaturday && (
                    <div className="ticket-div-wrapper">
                        <button className="buttonScroll" onClick={handleLeftClickSat}><IoIosArrowDropleftCircle/></button>
                        <div className="ticket-div" ref={carouselSaturday}>{renderdataSaturday}</div>
                        <button className="buttonScroll" onClick={handleRightClickSat}><IoIosArrowDroprightCircle/></button>
                    </div>
                )}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <p className="error">{errorSaturday}</p>}

                {!isLoadingSunday && dataSunday && (
                    <div className="ticket-div-wrapper">
                        <button className="buttonScroll" onClick={handleLeftClickSun}><IoIosArrowDropleftCircle/></button>
                        <div className="ticket-div" ref={carouselSunday}>{renderdataSunday}</div>
                        <button className="buttonScroll" onClick={handleRightClickSun}><IoIosArrowDroprightCircle/></button>
                    </div>
                )}
                {!isLoadingSunday && !dataSunday && errorSunday && <p className="error">{errorSunday}</p>}
            </TicketsSection>

            <Footer/>
        </>
    )
}