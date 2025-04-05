import Head from 'next/head'

// Components
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

// Functions
import { getAllEntry } from "@/functions/Entry/getAllEntry";
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function Category({ dataUserPhoto }: { dataUserPhoto: string }) {

    return (
        <>
            <Head>
                <title>ADAC Finance | Categoria</title>
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
                    name="Categoria"
                    photo={dataUserPhoto}
                    />

                    {/* Content */}

                    <section className="w-full mt-4">
                        <h1>Joga aqui o conteúdo chará</h1>
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