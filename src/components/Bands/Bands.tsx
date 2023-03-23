import { Container } from "./style"


interface propsband {
    bandName: string,
    startTime: string,
    endTime: string
}

export function Bands (band: propsband) {
    return (
        <Container>
            <h4>{band.bandName}</h4>
            <p>{band.startTime} - {band.endTime}</p>
        </Container>
    )
}