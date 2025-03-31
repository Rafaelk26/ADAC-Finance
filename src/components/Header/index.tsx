import Image from 'next/image'

// Logo ADAC
import LogoADAC from '@/assets/images/ADAC LOGO-White.png'
import { signOut } from 'next-auth/react';

interface headerProps{
    name: string;
    photo: string;
}

export function Header({name, photo}: headerProps){
    return(
        <>
            <header className="w-full flex justify-between items-center mt-4 outline outline-2 outline-red-300
            md:max-w-[95%] md:mx-auto md:flex md:justify-between md:ms-10
            lg:ms-10
            xl:ms-auto">
                <div className="mt-4 md:mt-2 flex items-center justify-center gap-6 outline outline-2 outline-red-300">
                    <Image className="w-16" src={LogoADAC} alt="ADAC" />
                    <span className='font-sora text-4xl'>{name}</span>
                </div>
                <div className='flex items-center gap-4'>
                    <Image 
                    className='w-14 rounded-full object-cover object-center'
                    width={2000}
                    height={2000}
                    src={photo} 
                    alt='Foto de Perfil'/>

                    <button 
                    onClick={()=> signOut()}
                    className='w-28 bg-red-600 text-white p-2 rounded-md'>Deslogar</button>
                </div>
            </header>
        </>
    )
}