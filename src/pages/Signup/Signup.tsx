import { useState } from "react"

import axios from "axios"
import { BsEye, BsEyeSlash } from "react-icons/bs"

import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { validateEmail, validateUserName, validatePassword } from "../../constants/constants"
import { baseUrl } from "../../constants/baseUrl"
import { useForm } from "../../hooks/useForm"

import { AxiosError, PasswordInput, SignupSection, SuccessMessage } from "./style"


export function Signup () {
    const [form, onChange, clearInputs] = useForm({name: "", email: "", password: "", confirmPassword: "", role: ""})
    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [errorRole, setErrorRole] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [axiosError, setAxiosError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inputType, setInputType] = useState("password")

    const handleSignup = (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorName("")
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirmPassword("")
        setErrorRole("")
        setAxiosError("")
        setSuccessMessage("")

        if (!validateUserName(form.name)) {
            setErrorName("Forneça seu nome completo sem o uso de acentuação.")
            setIsLoading(false)
        }
        if (!validateEmail(form.email)) {
            setErrorEmail("Email inválido.")
            setIsLoading(false)
        }
        if (!validatePassword(form.password)) {
            setErrorPassword("A senha deve conter no mínimo 8 caracteres.")
            setIsLoading(false)
        }
        if (form.password !== form.confirmPassword) {
            setErrorConfirmPassword("Senha incorreta.")
            setIsLoading(false)
        }

        if (form.role === "") {
            setErrorRole("Selecione o tipo de usuário.")
            setIsLoading(false)
        }

        if (validateUserName(form.name) && validateEmail(form.email) && validatePassword(form.password) && form.password === form.confirmPassword && form.role !== "") {
            const body = {
                name: form.name,
                email: form.email,
                password: form.password,
                role: form.role
            }

            axios.post(`${baseUrl}users/signup`, body)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                setSuccessMessage("Conta criada com sucesso!")
                clearInputs()
                setIsLoading(false)
            })
            .catch(error => {
                setAxiosError(error.response.data)
                setIsLoading(false)
            })
        }
    }

    return (
        <>
            <Header/>

            <SignupSection>
                <h3>Preencha os dados abaixo para criar a sua conta</h3>

                <form onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="name">Nome Completo</label>
                        <input type={'text'} placeholder="Maria Silva" name="name" value={form.name} onChange={onChange}/>
                        <p>{errorName}</p>
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type={'email'} placeholder="maria.silva@gmail.com" name="email" value={form.email} onChange={onChange}/>
                        <p>{errorEmail}</p>
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <PasswordInput>
                            <input type={inputType} placeholder="**********" name="password" value={form.password} onChange={onChange}/>
                            {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                        </PasswordInput>
                        <p>{errorPassword}</p>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirme a senha</label>
                        <PasswordInput>
                            <input type={inputType} placeholder="**********" name="confirmPassword" value={form.confirmPassword} onChange={onChange}/>
                            {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                        </PasswordInput>
                        <p>{errorConfirmPassword}</p>
                    </div>

                    <div>
                        <label htmlFor="role">Tipo de usuário</label>
                        <select name="role" value={form.role} onChange={onChange}>
                            <option>Selecione</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="NORMAL">NORMAL</option>
                        </select>
                        <p>{errorRole}</p>
                    </div>

                    <button>{isLoading? <Loading color={"orange"}/> : "Cadastrar"}</button>
                </form>

                <SuccessMessage>{successMessage}</SuccessMessage>
                <AxiosError>{axiosError}</AxiosError>
            </SignupSection>
        </>
    )
}