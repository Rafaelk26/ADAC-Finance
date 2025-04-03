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
import { CardDash } from '@/components/CardDash'

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
                            <CardDash 
                            name="Entradas Mensais"
                            photo={logoEntry}
                            value={"R$ 0,00"}
                            color="green"
                            />

                            {/* Card Output */}
                            <CardDash
                            name="Despesas Mensais"
                            photo={logoOutput}
                            value={"R$ 0,00"}
                            color="red"
                            />

                            {/* Card GrossCash */}
                            <CardDash
                            name="Caixa Bruto"
                            photo={logoGrossCash}
                            value={"R$ 0,00"}
                            color="blue"
                            />
                        </div>
                    </section>

                    {/* Info's */}

                    <section className="mt-10 flex outline outline-yellow-300">
                        
                        {/* Graphic 1 */}

                        <div className="w-[65%] outline outline-blue-400">
                            <h1>teste</h1>
                            <h1>teste</h1>
                            <h1>teste</h1>
                            <h1>teste</h1>
                            <h1>https://echarts.apache.org/examples/en/editor.html?c=bar1&lang=ts</h1>
                        </div>

                        {/* Last Registers */}

                        <div className="w-[36%] outline outline-green-400">
                            <h1>teste</h1>
                            <h1>teste</h1>
                            <h1>teste</h1>
                            <h1>teste</h1>
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