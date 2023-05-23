import { useState, useRef } from "react"

import {IoIosArrowDroprightCircle} from "react-icons/io"
import {IoIosArrowDropleftCircle} from "react-icons/io"

import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { TicketCard } from "../../components/TicketCard/TicketCard"

import { useRequestData } from "../../hooks/useRequestData"
import { baseUrl } from "../../constants/baseUrl"

import ticketFriday from "../../images/ticket-friday.png"
import ticketSaturday from "../../images/ticket-saturday.png"
import ticketSunday from "../../images/ticket-sunday.png"

import { ButtonScroll, Error, LoadingDiv, TicketDiv, TicketDivWrapper, TicketsSection } from "./style"

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
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData(`${baseUrl}tickets?weekDay=friday`, true)
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData(`${baseUrl}tickets?weekDay=saturday`, true)
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData(`${baseUrl}tickets?weekDay=sunday`, true)
    const carouselFriday = useRef<any>(null)
    const carouselSaturday = useRef<any>(null)
    const carouselSunday = useRef<any>(null)

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
                {(isLoadingFriday && isLoadingSaturday && isLoadingSunday) && <LoadingDiv><Loading color="black"/></LoadingDiv>}
                {!isLoadingFriday && dataFriday && (
                    <TicketDivWrapper>
                        <ButtonScroll onClick={handleLeftClickFri}><IoIosArrowDropleftCircle/></ButtonScroll>
                        <TicketDiv ref={carouselFriday}>{renderdataFriday}</TicketDiv>
                        <ButtonScroll onClick={handleRightClickFri}><IoIosArrowDroprightCircle/></ButtonScroll>
                    </TicketDivWrapper>
                )}
                {!isLoadingFriday && !dataFriday && errorFriday && <Error>{errorFriday}</Error>}

                {!isLoadingSaturday && dataSaturday && (
                    <TicketDivWrapper>
                        <ButtonScroll onClick={handleLeftClickSat}><IoIosArrowDropleftCircle/></ButtonScroll>
                        <TicketDiv ref={carouselSaturday}>{renderdataSaturday}</TicketDiv>
                        <ButtonScroll onClick={handleRightClickSat}><IoIosArrowDroprightCircle/></ButtonScroll>
                    </TicketDivWrapper>
                )}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <Error>{errorSaturday}</Error>}

                {!isLoadingSunday && dataSunday && (
                    <TicketDivWrapper>
                        <ButtonScroll onClick={handleLeftClickSun}><IoIosArrowDropleftCircle/></ButtonScroll>
                        <TicketDiv ref={carouselSunday}>{renderdataSunday}</TicketDiv>
                        <ButtonScroll onClick={handleRightClickSun}><IoIosArrowDroprightCircle/></ButtonScroll>
                    </TicketDivWrapper>
                )}
                {!isLoadingSunday && !dataSunday && errorSunday && <Error>{errorSunday}</Error>}
            </TicketsSection>

            <Footer/>
        </>
    )
}