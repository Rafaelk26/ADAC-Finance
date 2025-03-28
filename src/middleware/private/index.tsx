// Imports
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"


export function Private({children}: {children: React.ReactNode}){
    
    const {data: session, status} = useSession()
    
    // Rota para redirecionamento
    const router = useRouter()

    // Verificação de session antes de acessar as rotas das páginas
    useEffect(()=> {
        if (status === "unauthenticated"){
            router.push('/login')
        }
    }, [status, router])

    if(status === "loading"){
        <><h1>Loading...</h1></>
    }

    // Se tudo ocorrer com sucesso, será renderizada a página
    return <>{children}</> 

}