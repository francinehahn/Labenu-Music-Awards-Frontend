import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { Ticket } from "../../components/Ticket/Ticket"
import { useRequestData } from "../../hooks/useRequestData"
import { TicketsSection } from "./style"
import ticketFriday from "../../images/ticket-friday.png"
import ticketSaturday from "../../images/ticket-saturday.png"
import ticketSunday from "../../images/ticket-sunday.png"

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
    const [isLoadingFriday, dataFriday, errorFriday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=friday")
    const [isLoadingSaturday, dataSaturday, errorSaturday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=saturday")
    const [isLoadingSunday, dataSunday, errorSunday] = useRequestData("https://lama-fctv.onrender.com/tickets?weekDay=sunday")

    const renderdataFriday = dataFriday && dataFriday.map((item: ticket) => {
        return <Ticket
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketFriday}
                />
    })

    const renderdataSaturday = dataSaturday && dataSaturday.map((item: ticket) => {
        return <Ticket
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketSaturday}
                />
    })

    const renderdataSunday = dataSunday && dataSunday.map((item: ticket) => {
        return <Ticket
                    key={item.id}
                    id={item.id}
                    ticketName={item.ticket_name}
                    price={item.price}
                    ticketsAvailable={item.tickets_available}
                    startTime={item.start_time}
                    endTime={item.end_time}
                    bandName={item.band_name}
                    img={ticketSunday}
                />
    })

    return (
        <>
            <Header/>

            <TicketsSection>
                {(isLoadingFriday || isLoadingSaturday || isLoadingSunday) && <Loading color="black"/>}
                {!isLoadingFriday && dataFriday && <div className="ticket-div">{renderdataFriday}</div>}
                {!isLoadingFriday && !dataFriday && errorFriday && <p className="error">{errorFriday}</p>}

                {!isLoadingSaturday && dataSaturday && <div className="ticket-div">{renderdataSaturday}</div>}
                {!isLoadingSaturday && !dataSaturday && errorSaturday && <p className="error">{errorSaturday}</p>}

                {!isLoadingSunday && dataSunday && <div className="ticket-div">{renderdataSunday}</div>}
                {!isLoadingSunday && !dataSunday && errorSunday && <p className="error">{errorSunday}</p>}
            </TicketsSection>

            <Footer/>
        </>
    )
}