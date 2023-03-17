import { useState } from "react"

export function useForm (initialState: any) {
    const [form, setForm] = useState(initialState)

    const onChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () => {
        setForm(initialState)
    }

    return [form, onChange, clearInputs]
}