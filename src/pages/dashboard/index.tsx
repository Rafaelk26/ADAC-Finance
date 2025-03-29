// Imports
import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react"
import Head from "next/head";
import Image from "next/image";

// Export functions
import { getAllEntry } from '@/functions/Entry/getAllEntry'
import { getAllCategories } from '@/functions/Category/getAllCategories'


export default function Dashboard(){

    return(

        <>
            <Head>
                <title>ADAC Finance | Dashboard</title>
            </Head>

            <div>
                <h1 className="font-sora text-2xl">PÁGINA DE DASHBOARD</h1>
            </div>


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

    // Função que resgata os dados do back-end
    const data = await getAllEntry();
    const dataCategory = await getAllCategories();

    if (data) {
        console.log(data);
        console.log(dataCategory);
    }

    return {
        props: { data, dataCategory },
    };
};
