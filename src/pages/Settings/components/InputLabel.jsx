import { useState } from "react"

export const InputLabel = ({ id, label, inputValue, isPassword, isDisabled }) => {
    if (isPassword)
    {
        const [visible, setVisible] = useState('password')
        return (
            <>
                <div className="flex flex-col items-start justify-center gap-2">
                    <label for={id} className="text-black text-2xl md:text-lg font-bold">{label}</label>
                    <div className="flex gap-0 items-center justify-between border-[1px] border-black rounded-md p-2 focus-within:ring transition-all bg-inherit w-full">
                        <input 
                            id={id}
                            type={visible} 
                            value={inputValue} 
                            disabled={isDisabled}
                            className="text-black focus:outline-none bg-inherit max-w-30"/>
                        <button onClick={() => { visible === 'password' ? setVisible('show') : setVisible('password') }} disabled={isDisabled}  className="flex items-center justify-center">
                            <img src={visible === 'password' ? "assets/images/settingsIcons/visibleIcon.svg": "assets/images/settingsIcons/hideIcon.svg"} alt="See password icon" className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <label for={id} className="text-black text-2xl md:text-lg font-bold">{label}</label>
                    <input 
                        id={id}
                        type="text" 
                        value={inputValue} 
                        disabled={isDisabled}
                        className="text-black p-2 rounded-md border-[1px] border-black focus:outline-none focus:ring transition-all bg-inherit w-full"/>
                </div>
            </>
        )
    }
}