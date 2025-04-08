import { FormEvent, useState } from 'react'
import Head from 'next/head'
import { BiSearch } from 'react-icons/bi'

// Components
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

// Functions
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

// CSS
import styles from './history.module.css'




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

                    <section className="max-w-7xl w-full mt-6">
                        <div className='w-full flex justify-between'>
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
                                        <option value="">Categorias</option>
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