// Imports
import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react"
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

// Export functions
import { getAllEntry } from '@/functions/Entry/getAllEntry'
import { getAllCategories } from '@/functions/Category/getAllCategories'
import { AnimatedNumber } from '@/functions/Numbers/animatedNumber'


// Components
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'
import { CardDash } from '@/components/CardDash'
import { GraphicDash } from '@/components/GraphicDash'

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
                            value={<AnimatedNumber value={0} />}
                            color="green"
                            />

                            {/* Card Output */}
                            <CardDash
                            name="Despesas Mensais"
                            photo={logoOutput}
                            value={<AnimatedNumber value={0} />}
                            color="red"
                            />

                            {/* Card GrossCash */}
                            <CardDash
                            name="Caixa Bruto"
                            photo={logoGrossCash}
                            value={<AnimatedNumber value={0} />}
                            color="blue"
                            />
                        </div>
                    </section>

                    {/* Info's */}

                    <section className="mt-10 flex justify-between">
                        
                        {/* Graphic 1 */}

                        <div className="w-[65%]">
                            <GraphicDash />
                        </div>

                        {/* Last Registers */}

                        <div className="w-[30%]">
                            <h1 className="text-3xl font-sora font-semibold mb-4">Ult. Registros</h1>
                            {/* Entrys and Outputs list */}
                            <div className="w-full flex flex-col gap-4">

                                {/* Cards */}

                                <div className="w-full flex justify-between items-center outline outline-1 outline-white rounded-md p-2 bg-green-500 bg-opacity-20">
                                    {/* Info */}
                                    <div className="flex items-center gap-3">
                                        {/* Image */}
                                        <div>
                                            <Image
                                                className="w-7"
                                                src={logoEntry}
                                                alt="Logo Entrada" />
                                        </div>
                                        {/* Name and Date */}
                                        <div>
                                            <h1 className="font-sora text-2xl font-semibold">Receitas</h1>
                                            <h1 className="font-sora text font-thin">01/01/2025</h1>
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="">
                                        <span className="font-sora text-xl font-semibold">
                                            {<AnimatedNumber value={0} />}
                                        </span>
                                    </div>
                                </div>

                                {/* Cards */}
                                
                                <div className="w-full flex justify-between items-center outline outline-1 outline-white rounded-md p-2 bg-green-500 bg-opacity-20">
                                    {/* Info */}
                                    <div className="flex items-center gap-3">
                                        {/* Image */}
                                        <div>
                                            <Image
                                                className="w-7"
                                                src={logoEntry}
                                                alt="Logo Entrada" />
                                        </div>
                                        {/* Name and Date */}
                                        <div>
                                            <h1 className="font-sora text-2xl font-semibold">Receitas</h1>
                                            <h1 className="font-sora text font-thin">01/01/2025</h1>
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="">
                                        <span className="font-sora text-xl font-semibold">
                                            {<AnimatedNumber value={0} />}
                                        </span>
                                    </div>
                                </div>

                                {/* Cards */}

                                <div className="w-full flex justify-between items-center outline outline-1 outline-white rounded-md p-2 bg-red-500 bg-opacity-20">
                                    {/* Info */}
                                    <div className="flex items-center gap-3">
                                        {/* Image */}
                                        <div>
                                            <Image
                                                className="w-7"
                                                src={logoOutput}
                                                alt="Logo Entrada" />
                                        </div>
                                        {/* Name and Date */}
                                        <div>
                                            <h1 className="font-sora text-2xl font-semibold">Despesas</h1>
                                            <h1 className="font-sora text font-thin">02/01/2025</h1>
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="">
                                        <span className="font-sora text-xl font-semibold">
                                            {<AnimatedNumber value={0} />}
                                        </span>
                                    </div>
                                </div>

                                {/* Cards */}

                                <div className="w-full flex justify-between items-center outline outline-1 outline-white rounded-md p-2 bg-green-500 bg-opacity-20">
                                    {/* Info */}
                                    <div className="flex items-center gap-3">
                                        {/* Image */}
                                        <div>
                                            <Image
                                                className="w-7"
                                                src={logoEntry}
                                                alt="Logo Entrada" />
                                        </div>
                                        {/* Name and Date */}
                                        <div>
                                            <h1 className="font-sora text-2xl font-semibold">Receitas</h1>
                                            <h1 className="font-sora text font-thin">01/01/2025</h1>
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="">
                                        <span className="font-sora text-xl font-semibold">
                                            {<AnimatedNumber value={0} />}
                                        </span>
                                    </div>
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

    console.log(data)

    return {
        props: { data, dataCategory, dataUserPhoto },
    };
};