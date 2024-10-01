import { ArrowLeftRight } from "lucide-react"
import { InputLabel } from "../components/InputLabel"
import { Header } from "./components/Header"
import { useState } from "react"

export const UserIn = () => {

    let login = false
    let signin = false

    const [entry, setEntry]= useState('l')

    if (entry === 'l')
    {
        login = true
        signin = false
    }
    else if (entry === 's')
    {
        login = false
        signin = true
    }

    return (
        <>
            <Header/>
            <div className="flex flex-col gap-4 max-w-[50rem] m-auto mt-20 items-center border-2 border-[#CDCDCD] bg-white p-5 rounded-md relative">
                <div className="container flex flex-col lg:flex-row justify-center">
                    <div className={`flex flex-col gap-2 px-8 py-4 rounded-md basis-1/2 h-full ${login ? 'bg-inherit' : 'bg-[#CDCDCD]'} transition-all`}>
                        <h1 className="font-bold text-eblue text-2xl">Faça seu cadastro!</h1>
                        <div>
                            <div className="flex flex-col gap-2">
                                <InputLabel id={'nome'} inputValue={''} isPassword={false} isDisabled={signin} label={'Nome'}/>
                                <InputLabel id={'senha'} inputValue={''} isPassword={true} isDisabled={signin} label={'Senha'}/>
                                <InputLabel id={'confirmarSenha'} inputValue={''} isPassword={true} isDisabled={signin} label={'Confirmar Senha'}/>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 px-8 py-4 rounded-md basis-1/2 ${signin ? 'bg-inherit' : 'bg-[#CDCDCD]'} transition-all`}>
                        <h1 className="font-bold text-eblue text-2xl">Já tem uma conta? Faça seu login!</h1>
                        <div>
                            <div className="flex flex-col gap-2">
                                <InputLabel id={'nome'} inputValue={''} isPassword={false} isDisabled={login} label={'Nome'}/>
                                <InputLabel id={'senha'} inputValue={''} isPassword={true} isDisabled={login} label={'Senha'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-5 py-2 bg-eblue text-black font-bold text-xl rounded-md max-w-32" 
                    onClick={() => 
                        {
                            localStorage.setItem("authToken", "entrou")
                            window.location.assign('/')
                            }}>Entrar</button>
                <button className="absolute top-1/2 rotate-90 lg:rotate-0"
                    onClick={() => {
                        entry === 'l' ? setEntry('s') : setEntry('l')
                    }}>
                    <ArrowLeftRight/>
                </button>
            </div>
        </>
    )
}