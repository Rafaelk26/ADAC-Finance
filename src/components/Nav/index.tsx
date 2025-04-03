import Image from 'next/image'
import Link from 'next/link'

// Logos
import LogoADAC from '../../../public/ADAC LOGO-White.png'
import LogoHistory from '../../../public/logoHistory.png'
import LogoForecast from '../../../public/logoForecast.png'
import LogoCategory from '../../../public/logoCategory.png'
import LogoPrint from '../../../public/logoPrint.png'

export function Nav(){
    return(
        <>
            <nav className="w-full flex flex-col justify-center h-screen items-center">
                {/* Home */}
                <Link href={'/dashboard'} className="w-16 mt-4 absolute top-0 z-10" >
                    <Image src={LogoADAC} alt="ADAC" title='Home' />
                </Link>
                <ul className="w-full flex flex-col items-center gap-14">  
                    {/* History */}
                    <Link href={'/history'}>
                        <Image 
                        className='w-9 transition-all
                        hover:scale-105 hover:w-10 hover:bg-slate-400 hover:bg-opacity-50 hover:p-2 hover:rounded-full hover:outline hover:outline-slate-100
                        focus:scale-105 focus:w-10 focus:bg-slate-400 focus:bg-opacity-50 focus:p-2 focus:rounded-full focus:outline focus:outline-slate-100' 
                        
                        src={LogoHistory} 
                        alt='Logo Histórico' 
                        title='Histórico' />
                    </Link>

                    {/* Forecast */}
                    <Link href={'/forecast'}>
                        <Image 
                        className='w-9 transition-all
                        hover:scale-105 hover:w-10 hover:bg-slate-400 hover:bg-opacity-50 hover:p-2 hover:rounded-full hover:outline hover:outline-slate-100
                        focus:scale-105 focus:w-10 focus:bg-slate-400 focus:bg-opacity-50 focus:p-2 focus:rounded-full focus:outline focus:outline-slate-100' 
                        src={LogoForecast} 
                        alt='Logo Previsões' 
                        title='Previsões' />
                    </Link>

                    {/* Category */}
                    <Link href={'/category'}>
                        <Image 
                        className='w-8 h-8 object-contain transition-all
                        hover:scale-105 hover:w-9 hover:bg-slate-400 hover:bg-opacity-50 hover:p-2 hover:rounded-full hover:outline hover:outline-slate-100 hover:object-contain
                        focus:scale-105 focus:w-9 focus:bg-slate-400 focus:bg-opacity-50 focus:p-2 focus:rounded-full focus:outline focus:outline-slate-100 focus:object-contain' 
                        src={LogoCategory} 
                        alt='Logo Categoria' 
                        title='Categoria' />
                    </Link>

                    {/* Print */}
                    <Link href={'/print'}>
                        <Image 
                            className='w-9 transition-all
                        hover:scale-105 hover:w-10 hover:bg-slate-400 hover:bg-opacity-50 hover:p-2 hover:rounded-full hover:outline hover:outline-slate-100
                        focus:scale-105 focus:w-10 focus:bg-slate-400 focus:bg-opacity-50 focus:p-2 focus:rounded-full focus:outline focus:outline-slate-100' 
                        src={LogoPrint} 
                        alt='Logo Impressões' 
                        title='Impressões' />
                    </Link>
                </ul>
            </nav>
        
        </>
    )
}