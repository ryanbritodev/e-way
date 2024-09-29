import { InputLabel } from "./InputLabel"

export const FormPersonalInfo = ({ isDisabled }) => {
    let bgColor = '#CDCDCD'
    if (!isDisabled)
    {
        bgColor = '#FFFFFF'
    }

    return (
        <>
            <div className={`flex flex-col gap-4 p-5 bg-[${bgColor}] rounded-lg transition-all border-[2px] border-[#CDCDCD] basis-10/12 min-w-72`}>
                <InputLabel id={'nome'} label={'Nome'} inputValue={'Diogo Leles'} isPassword={false} isDisabled={isDisabled}/>
                <InputLabel id={'email'} label={'E-mail'} inputValue={'diogo@itau.com.br'} isPassword={false} isDisabled={isDisabled}/>
                <InputLabel id={'local'} label={'Localização'} inputValue={'São Paulo, SP'} isPassword={false} isDisabled={isDisabled}/>
                <InputLabel id={'senha'} label={'Senha'} inputValue={'fiap@2024'} isPassword={true} isDisabled={isDisabled}/>
            </div>
        </>
    )
}