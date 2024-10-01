import { ArrowLeftRight } from "lucide-react"
import { InputLabel } from "../components/InputLabel"
import { Header } from "./components/Header"

export const UserIn = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col gap-4 max-w-[50rem] m-auto mt-20 items-center border-2 border-[#CDCDCD] p-5 rounded-md relative">
                <div className="container flex divide-x items-start justify-center">
                    <div className="flex flex-col gap-2 px-8 basis-1/2 h-full">
                        <h1 className="font-bold text-eblue text-2xl">Faça seu cadastro!</h1>
                        <div>
                            <div className="flex flex-col gap-2">
                                <InputLabel id={'nome'} inputValue={''} isPassword={false} isDisabled={false} label={'Nome'}/>
                                <InputLabel id={'senha'} inputValue={''} isPassword={true} isDisabled={false} label={'Senha'}/>
                                <InputLabel id={'confirmarSenha'} inputValue={''} isPassword={true} isDisabled={false} label={'Confirmar Senha'}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 px-8 basis-1/2 h-full">
                        <h1 className="font-bold text-eblue text-2xl">Já tem uma conta? Faça seu login!</h1>
                        <div>
                            <div className="flex flex-col gap-2">
                                <InputLabel id={'nome'} inputValue={''} isPassword={false} isDisabled={false} label={'Nome'}/>
                                <InputLabel id={'senha'} inputValue={''} isPassword={true} isDisabled={false} label={'Senha'}/>
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
                <button className="absolute top-1/2">
                    <ArrowLeftRight/>
                </button>
            </div>
        </>
    )
}