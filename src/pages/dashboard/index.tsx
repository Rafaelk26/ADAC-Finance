// Imports
import { signOut, useSession } from "next-auth/react"
import Head from "next/head";
import Image from "next/image";

export default function Dashboard(){
    
    const {data: session} = useSession()
    

    return(

        <>
            <Head>
                <title>ADAC Finance | Dashboard</title>
            </Head>

            <h1>Página de Dashboard</h1>
            <h2>Nome: {session?.user?.name}</h2>

            <button onClick={()=> signOut()}>Deslogar</button>
        </>
    )
}