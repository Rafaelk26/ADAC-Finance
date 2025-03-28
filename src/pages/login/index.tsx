// Imports
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

// Components
import { Footer } from "@/components/Footer";
import { Input } from '../../components/Login/Input';
import { Button } from '../../components/Login/Button';

// CSS
import styles from './login.module.css';

// Image
import GoogleImg from '../../assets/images/Google.png';



export default function Login(){

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent) =>{
        // Trava o envio dos dados
        e.preventDefault()

        // Tratamento dos dados
        //  ...
        const obj = {
            user: user,
            password: password
        }
        console.log(obj)
        
    }


    return(
        <>
            <Head>
                <title>ADAC Finance | Login</title>
            </Head>
            
            {/* Background Image */}
            <div className={`${styles.backgroundImage}`}></div>

            <main className="w-full flex justify-center items-center h-screen -mb-10">
                <div className="w-11/12 max-w-sm flex flex-col items-center py-8 px-6 border border-solid border-white rounded-lg
                sm:w-96
                md:w-96">
                    <h1 className="font-sora font-semibold text-4xl mb-10">Login</h1>
                    <form
                    onSubmit={(e) => handleSubmit(e)} 
                    className="w-full flex flex-col gap-y-4">
                        <Input 
                        type="text"
                        placeholder="Usuario"
                        name="User"
                        onChange={(e)=> setUser(e.target.value)}
                        />
                        
                        <Input
                        type="password"
                        placeholder="Senha"
                        name="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button 
                        text="Entrar"
                        />
                    </form>
                    
                    <h4 className="font-sora my-4">OU</h4>

                    {/* Button Google */}
                    <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full flex justify-center items-center bg-transparent rounded-md p-3 border border-solid border-blue-600
                    font-sora font-semibold transition-all text-sm gap-3
                    focus:bg-white focus:text-black focus:outline-0 focus:border-0
                    hover:bg-white hover:text-black hover:outline-0 hover:border-0
                    sm:text-md
                    md:text-lg"
                    >
                        <Image 
                        className="w-8"
                        src={GoogleImg} 
                        alt="Logo Google" />
                        <span>Entrar com Google</span>
                    </button>

                    <a 
                    className="font-sora mt-4 underline text-blue-300 text-center transition-all
                    hover:text-white
                    focus:outline-none focus:rounded-none focus:text-white"
                    href="/sign">Não possui conta? Cadastre-se!</a>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}