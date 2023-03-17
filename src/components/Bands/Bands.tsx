import { Container } from "./style"


interface propsband {
    bandName: string,
    startTime: string,
    endTime: string
}

export function Bands (band: propsband) {
    return (
        <Container>
            <h3>{band.bandName}</h3>
            <p>{band.startTime} - {band.endTime}</p>
        </Container>
    )
}