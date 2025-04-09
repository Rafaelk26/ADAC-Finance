import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

// Components
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

// Functions
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

// CSS
import styles from './history.module.css'

// Image
import logoEntry from '../../../public/logoEntry.png'
import logoOutput from '../../../public/logoOutput.png'



export default function History({ dataUserPhoto }: { dataUserPhoto: string }) {

    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');


    function sendFilter(e: FormEvent){
        e.preventDefault()

        // Confere se os campos estão preenchidos, pelo menos um!
        if(!category && !date){
            alert('Erro: campos vazios')
            return
        }

        console.log("Dados enviados:", category, date);
    }



    return (
        <>
            <Head>
                <title>ADAC Finance | Histórico</title>
                <link rel="icon" href="/ADAC LOGO-White.png" />
            </Head>


            <main className="max-w-screen-2xl w-full h-screen flex gap-4 mx-auto">
                <div className="max-w-[10%] w-full">
                    {/* Menu */}
                    <Nav />
                </div>    

                <div className="w-full pe-4">

                    {/* Header */}

                    <Header
                    name="Histórico"
                    photo={dataUserPhoto}
                    />

                    {/* Content */}

                    <section className="max-w-7xl w-full mt-6 flex flex-col gap-8">
                        {/* Filter */}
                        <div className='w-full flex justify-between outline outline-yellow-300'>
                            <h1 className='font-sora font-semibold text-3xl'>Registros</h1>


                            <div className='w-fit flex items-center justify-between'>
                                <h1 className='font-sora text-xl pe-6'>Filtrar: </h1>
                                <div>
                                    <form 
                                    className='w-96 flex gap-4'
                                    onSubmit={(e)=> sendFilter(e)}>
                                        <input
                                        onChange={(e) => setCategory(e.target.value)}
                                        className={`${styles.Date} w-1/2 bg-black font-sora p-2 outline outline-white outline-1 rounded-md`}
                                        type="date" />

                                        <select
                                        onChange={(e) => setDate(e.target.value)}
                                        className={`w-1/2 bg-black font-sora p-1 outline outline-white outline-1 rounded-md`} >
                                        <option value="">Opções</option>
                                        <option value="All">Todos</option>
                                        <option value="Receitas">Receitas</option>
                                        <option value="Despesas">Despesas</option>
                                        </select>

                                        <button
                                        type='submit'
                                        className="w-24 flex flex-col items-center justify-center outline outline-white outline-1 rounded-md transition-all
                                        hover:scale-105 hover:bg-gray-500 hover:bg-opacity-45">
                                            <BiSearch size={26} color='#fff' />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <section className='w-full px-5 py-7 flex flex-col gap-5 outline outline-green-300'>
                            {/* Card Register History */}
                            
                            
                            <div className='w-full flex justify-between py-2 px-6 outline outline-1 outline-green-600 rounded-lg'>
                                {/* Image, name and date */}
                                <div className='max-w-fit w-full flex gap-4'>
                                    <div className='max-w-fit w-full flex flex-col justify-center'>
                                        {/* Image */}
                                        <Image
                                            className=''
                                            src={logoEntry}
                                            alt={`Entrada ?`} />
                                    </div>
                                    {/* Name and date */}
                                    <div className='max-w-fit w-full flex flex-col'>
                                        <span className='font-sora text-2xl font-semibold'>Receitas</span>
                                        <span className='font-sora text-lg font-thin'>01/01/2025</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className='max-w-fit w-full flex flex-col justify-center'>
                                    <span className='font-sora text-2xl font-semibold'>R$ 0,00</span>
                                </div>
                            </div>


                            <div className='w-full flex justify-between py-2 px-6 outline outline-1 outline-red-600 rounded-lg'>
                                {/* Image, name and date */}
                                <div className='max-w-fit w-full flex gap-4'>
                                    <div className='max-w-fit w-full flex flex-col justify-center'>
                                        {/* Image */}
                                        <Image
                                            className=''
                                            src={logoOutput}
                                            alt={`Despesas ?`} />
                                    </div>
                                    {/* Name and date */}
                                    <div className='max-w-fit w-full flex flex-col'>
                                        <span className='font-sora text-2xl font-semibold'>Despesas</span>
                                        <span className='font-sora text-lg font-thin'>01/01/2025</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className='max-w-fit w-full flex flex-col justify-center'>
                                    <span className='font-sora text-2xl font-semibold'>R$ 0,00</span>
                                </div>
                            </div>
                        </section>
                    </section>
                    
                </div>
                
            </main>

        </>
    )
}


// Conferir session usando getServerSideProps

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session?.user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    // Funções que resgatam os dados do back-end
    
    const dataUserPhoto = session?.user?.image;

    return {
        props: { dataUserPhoto },
    };
};