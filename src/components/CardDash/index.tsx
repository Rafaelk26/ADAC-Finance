import Image from "next/image"

// Interafaces
import { CardProps } from '@/interfaces/CardProps'


export function CardDash({ name, photo, value, color }: CardProps){
    return(
        <>
            <div className={`w-[22rem] border border-solid border-s-4 border-white bg-${color}-500 bg-opacity-10 rounded-md py-2`}>
                {/* Icon more Sub-title */}
                <div className="w-full px-6 flex justify-between items-center">
                    <span className="font-sora font-thin text-lg">Total de</span>
                    <Image className="w-10" src={photo} alt="Logo Entrada" />
                </div>
                {/* Title */}
                <div className="w-full px-6 mt-2">
                    <span className="font-sora font-semibold text-3xl">{name}</span>
                    <hr className="mt-1" />
                </div>
                {/* Value */}
                <div className="w-full px-6 mt-2">
                    <span className="font-sora font-semibold text-3xl">{value}</span>
                </div>
            </div>
        </>
    )
}