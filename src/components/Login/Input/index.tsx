import { InputHTMLAttributes } from "react"


interface inputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({...rest}: inputProps){
    return(
        <>
            <input 
            className="w-full bg-transparent rounded-md p-3 border outline-solid outline-white
            font-sora font-light
            placeholder:text-gray-500 placeholder:text-md
            focus:placeholder:text-white focus:outline focus:outline-blue-400 focus:border-0"
            {...rest}
            />
        </>
    )
}
