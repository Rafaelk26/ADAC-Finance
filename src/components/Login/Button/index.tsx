import { ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

export function Button({ text, ...rest}: buttonProps){
    return(
        <>
            <button 
            className="w-full bg-transparent rounded-md p-3 border border-solid border-white
            font-sora font-semibold transition-all text-lg
            focus:bg-white focus:text-black focus:outline-0
            hover:bg-white hover:text-black hover:outline-0"
            {...rest}>{text}</button>
        </>
    )
}