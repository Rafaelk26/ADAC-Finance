import Image from 'next/image'

// Logo ADAC
import LogoADAC from '../../../public/ADAC LOGO-White.png'

export function Nav(){
    return(
        <>
            <nav className="w-full flex flex-col justify-center h-screen items-center outline outline-4 outline-green-600">
                <Image className="w-16 mt-4 absolute top-0 z-10" src={LogoADAC} alt="ADAC" />
                <ul className="w-full flex flex-col items-center gap-14">    
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </nav>
        
        </>
    )
}