import axios from "axios"
import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm"
import { useRequestData } from "../../hooks/useRequestData"
import { Loading } from "../Loading/Loading"
import { FormSection } from "./style"

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
    const [isLoadingBands, data] = useRequestData('https://lama-fctv.onrender.com/bands', props.reload)
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
        }
        if (formConcert.endTime.length < 8) {
            setEndTimeError("O formato do horário deve ser 00:00:00, sem haver minutos e segundos.")
        }

        if (formConcert.startTime.length >= 8 && formConcert.endTime.length >= 8) {
            axios.post('https://lama-fctv.onrender.com/concerts/create', formConcert, {
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

        setIsLoadingConcert(false)
        return
    }

    return (
        <FormSection onSubmit={handleConcertRegistration}>
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
                <p>{startTimeError}</p>
            </div>

            <div>
                <label htmlFor="endTime">Horário de encerramento</label>
                <input type={'text'} placeholder="17:00:00" name="endTime" value={formConcert.endTime} onChange={onChangeConcert}/>
                <p>{endTimeError}</p>
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

            <p id="error">{axiosErrorConcert}</p>
            <p id="successMessage">{successMessageConcert}</p>

            <button>{isLoadingConcert? <Loading color="orange"/> : 'Registrar show'}</button>
        </FormSection>
    )
}