import axios from "axios"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { validateEmail, validatePassword } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { LoginSection, PasswordInput } from "./style"
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"
import { Loading } from "../../components/Loading/Loading"


export function Login () {
    const [form, onChange, clearInputs] = useForm({email: "", password: ""})
    const [errorEmail, setErrorEmail] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<string>("")
    const [axiosError, setAxiosError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [inputType, setInputType] = useState<string>("password")

    const navigate = useNavigate()

    const handleLogin = (e: any) => {
        e.preventDefault()
        setIsLoading(true)

        if (!validateEmail(form.email)) {
            setErrorEmail("Email inválido.")
            setIsLoading(false)
            return
        }

        if (!validatePassword(form.password)) {
            setErrorPassword("A senha deve ter pelo menos 8 caracteres.")
            setIsLoading(false)
            return
        }

        axios.put("https://lama-fctv.onrender.com/users/login", form)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", response.data.role)
            setIsLoading(false)
            navigate("/")
        })
        .catch(error => {
            setAxiosError(error.response.data)
            setIsLoading(false)
        })
    }

    return (
        <>
            <Header/>

            <LoginSection>
                <h3>Informe os seus dados para acessar a sua conta</h3>

                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type={'email'} placeholder="email@email.com.br" name={"email"} value={form.email} onChange={onChange}/>
                        <p>{errorEmail}</p>
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <PasswordInput>
                            <input type={inputType} placeholder="**********" name="password" value={form.password} onChange={onChange}/>
                            {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                        </PasswordInput>
                        <p>{errorPassword}</p>
                    </div>

                    <p>{axiosError}</p>
                    <button>{!isLoading? "Entrar" : <Loading/>}</button>
                </form>

                <span>
                    <p>Não possui uma conta?</p>
                    <a href="/signup">Clique aqui</a>
                </span>
            </LoginSection>
        </>
    )
}