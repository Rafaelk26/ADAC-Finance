// Imports
import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react"
import Head from "next/head";
import Image from "next/image";

// Export functions
import { getAllEntry } from '@/functions/Entry/getAllEntry'
import { getAllCategories } from '@/functions/Category/getAllCategories'

// Components
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'

// Images
import logoEntry from '../../../public/logoEntry.png'
import logoOutput from '../../../public/logoOutput.png'
import logoGrossCash from '../../../public/logoGrossCash.png'



export default function Dashboard({ dataUserPhoto }: { dataUserPhoto: string}){

    return(

        <>
            <Head>
                <title>ADAC Finance | Dashboard</title>
                <link rel="icon" href="/ADAC LOGO-White.png" />
            </Head>


            <main className="w-full h-screen flex gap-4">
                <div className="max-w-[10%] w-full">
                    {/* Menu */}
                    <Nav />
                </div>    

                <div className="w-full pe-4">

                    {/* Header */}

                    <Header
                    name="Dashboard"
                    photo={dataUserPhoto}
                    />

                    {/* Content */}

                    <section className="w-full mt-4">
                        {/* Card's div */}
                        <div className="w-full flex justify-between">

                            {/* Card Entry */}
                            <div className="w-[22rem] border border-solid border-s-4 border-white bg-green-500 bg-opacity-10 rounded-md py-2">
                                {/* Icon more Sub-title */}
                                <div className="w-full px-6 flex justify-between items-center">
                                    <span className="font-sora font-thin text-lg">Total de</span>
                                    <Image className="w-12" src={logoEntry} alt="Logo Entrada" />
                                </div>
                                {/* Title */}
                                <div className="w-full px-6">
                                    <span className="font-sora font-semibold text-3xl">Receitas Mensais</span>
                                    <hr className="mt-1" />
                                </div>
                                {/* Value */}
                                <div className="w-full px-6 mt-2">
                                    <span className="font-sora font-semibold text-3xl">R$ 0,00</span>
                                </div>
                            </div>

                            {/* Card Output */}
                            <div className="w-[22rem] border border-solid border-s-4 border-white bg-red-500 bg-opacity-10 rounded-md py-2">
                                {/* Icon more Sub-title */}
                                <div className="w-full px-6 flex justify-between items-center">
                                    <span className="font-sora font-thin text-lg">Total de</span>
                                    <Image className="w-12" src={logoOutput} alt="Logo Entrada" />
                                </div>
                                {/* Title */}
                                <div className="w-full px-6">
                                    <span className="font-sora font-semibold text-3xl">Despesas Mensais</span>
                                    <hr className="mt-1" />
                                </div>
                                {/* Value */}
                                <div className="w-full px-6 mt-2">
                                    <span className="font-sora font-semibold text-3xl">R$ 0,00</span>
                                </div>
                            </div>

                            {/* Card GrossCash */}
                            <div className="w-[22rem] border border-solid border-s-4 border-white bg-blue-500 bg-opacity-10 rounded-md py-2">
                                {/* Icon more Sub-title */}
                                <div className="w-full px-6 flex justify-between items-center">
                                    <span className="font-sora font-thin text-lg">Total de</span>
                                    <Image className="w-10" src={logoGrossCash} alt="Logo Caixa Bruto" />
                                </div>
                                {/* Title */}
                                <div className="w-full px-6">
                                    <span className="font-sora font-semibold text-3xl">Caixa Bruto</span>
                                    <hr className="mt-1" />
                                </div>
                                {/* Value */}
                                <div className="w-full px-6 mt-2">
                                    <span className="font-sora font-semibold text-3xl">R$ 0,00</span>
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
    const data = await getAllEntry();
    const dataCategory = await getAllCategories();
    
    const dataUserPhoto = session?.user?.image;

    return {
        props: { data, dataCategory, dataUserPhoto },
    };
};