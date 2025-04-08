import Image from "next/image"

// Interafaces
import { CardProps } from '@/interfaces/CardProps'


export function CardCategory({ name, photo, value }: CardProps){
    return(
        <>
            <div className={`w-[22rem] border border-solid border-s-4 border-white rounded-md py-2`}>
                {/* Icon more Sub-title */}
                <div className="w-full px-6 flex items-center gap-2">
                    <div className="w-1/4 flex flex-col items-center">
                        <Image className="w-12" src={photo} alt={`Logo ${name}`} />
                    </div>

                    <div className="flex flex-col w-full">
                        <span className="font-sora font-semibold text-3xl">{name}</span>
                        <span className="font-sora font-thin text-lg">Despesas no setor</span>
                    </div>
                </div>
                {/* Title */}
                <div className="w-full px-6 mt-2">
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