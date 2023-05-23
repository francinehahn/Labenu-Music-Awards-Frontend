import { useState } from "react"
import axios from "axios"

import { useForm } from "../../hooks/useForm"
import { useRequestData } from "../../hooks/useRequestData"

import { Loading } from "../Loading/Loading"
import { baseUrl } from "../../constants/baseUrl"

import { Error, SuccessMessage } from "./style"

interface band {
    id: string,
    name: string,
    music_genre: string,
    responsible: string
}

interface concertProps {
    reload: boolean,
    setReload: any
}

export function ConcertRegistrationForm (props: concertProps) {
    const token = localStorage.getItem("token")
    const [isLoadingBands, data] = useRequestData(`${baseUrl}bands`, props.reload)
    const [formConcert, onChangeConcert, clearInputs] = useForm({weekDay: "", startTime: "", endTime: "", bandId: ""})
    const [isLoadingConcert, setIsLoadingConcert] = useState(false)
    const [startTimeError, setStartTimeError] = useState("")
    const [endTimeError, setEndTimeError] = useState("")
    const [successMessageConcert, setSuccessMessageConcert] = useState("")
    const [axiosErrorConcert, setAxiosErrorConcert] = useState("")

    const handleConcertRegistration = (e: any) => {
        e.preventDefault()
        setIsLoadingConcert(true)
        setStartTimeError("")
        setEndTimeError("")
        setAxiosErrorConcert("")
        
        if (formConcert.startTime.length < 8) {
            setStartTimeError("O formato do horário deve ser 00:00:00, sem haver minutos e segundos.")
            setIsLoadingConcert(false)
        }
        if (formConcert.endTime.length < 8) {
            setEndTimeError("O formato do horário deve ser 00:00:00, sem haver minutos e segundos.")
            setIsLoadingConcert(false)
        }

        if (formConcert.startTime.length >= 8 && formConcert.endTime.length >= 8) {
            axios.post(`${baseUrl}concerts/create`, formConcert, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setSuccessMessageConcert("Show cadastrado com sucesso!")
                props.setReload(!props.reload)
                clearInputs()
                setIsLoadingConcert(false)
            })
            .catch(error => {
                setAxiosErrorConcert(error.response.data)
                setIsLoadingConcert(false)
            })
        }
    }

    return (
        <form onSubmit={handleConcertRegistration}>
            <div>
                <label htmlFor="weekDay">Dia da semana</label>
                <select name="weekDay" value={formConcert.weekDay} onChange={onChangeConcert}>
                    <option>Selecione</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                </select>
            </div>

            <div>
                <label htmlFor="startTime">Horário de início</label>
                <input type={'text'} placeholder="15:00:00" name="startTime" value={formConcert.startTime} onChange={onChangeConcert}/>
                <Error>{startTimeError}</Error>
            </div>

            <div>
                <label htmlFor="endTime">Horário de encerramento</label>
                <input type={'text'} placeholder="17:00:00" name="endTime" value={formConcert.endTime} onChange={onChangeConcert}/>
                <Error>{endTimeError}</Error>
            </div>

            <div>
                <label htmlFor="bandId">Banda</label>
                <select value={formConcert.bandId} name="bandId" onChange={onChangeConcert}>
                    {isLoadingBands && <option>Carregando...</option>}
                    <option>Selecione</option>
                    {!isLoadingBands && data && data.map((item: band) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
            </div>

            <Error>{axiosErrorConcert}</Error>
            <SuccessMessage>{successMessageConcert}</SuccessMessage>

            <button>{isLoadingConcert? <Loading color="orange"/> : 'Registrar show'}</button>
        </form>
    )
}