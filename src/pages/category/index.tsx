import Head from 'next/head'

// Components
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import { CardCategory } from '@/components/CardCategory'
import { AnimatedNumber } from '@/functions/Numbers/animatedNumber';

// Functions
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

// Images
import logoAdmin from '../../../public/logoAdmin.png'
import logoChair from '../../../public/logoChair.png'
import logoCheck from '../../../public/logoCheck.png'
import logoClean from '../../../public/logoClean.png'
import logoCleanProduct from '../../../public/logoCleanProduct.png'
import logoCoffee from '../../../public/logoCoffee.png'
import logoInvoice from '../../../public/logoInvoice.png'
import logoKids from '../../../public/logoKids.png'
import logoManu from '../../../public/logoManu.png'
import logoMoney from '../../../public/logoMoney.png'
import logoSale from '../../../public/logoSale.png'
import logoScreen from '../../../public/logoScreen.png'


export default function Category({ dataUserPhoto }: { dataUserPhoto: string }) {

    return (
        <>
            <Head>
                <title>ADAC Finance | Categoria</title>
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
                    name="Categoria"
                    photo={dataUserPhoto}
                    />

                    {/* Content */}

                    <section className="max-w-7xl w-full mt-4 grid grid-cols-3 gap-4 justify-items-center relative pb-12">

                        <CardCategory
                        name='Admin'
                        photo={logoAdmin}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Água/Luz/Int.'
                        photo={logoInvoice}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Aluguéis'
                        photo={logoSale}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Cadeiras'
                        photo={logoChair}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Cafeteria'
                        photo={logoCoffee}
                        value={<AnimatedNumber value={0} />}
                        />


                        <CardCategory
                        name='D. Pastorais'
                        photo={logoMoney}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Fundo'
                        photo={logoMoney}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Kids'
                        photo={logoKids}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Manutenções'
                        photo={logoManu}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Missões'
                        photo={logoCheck}
                        value={<AnimatedNumber value={0} />}
                        />


                        <CardCategory
                        name='Prod. Higiene'
                        photo={logoCleanProduct}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Serv. Limpeza'
                        photo={logoClean}
                        value={<AnimatedNumber value={0} />}
                        />

                        <CardCategory
                        name='Telão'
                        photo={logoScreen}
                        value={<AnimatedNumber value={0} />}
                        />

                        <div className='w-full col-span-2 flex justify-end pe-4
                        2xl:pe-8'>
                            <div className={`w-[22rem] border border-solid border-s-4 bg-blue-600 bg-opacity-10 border-blue-400 rounded-md py-2`}>
                                {/* Icon more Sub-title */}
                                <div className="w-full px-6 flex items-center gap-2">                
                                    <div className="flex flex-col w-full">
                                        <span className="font-sora font-semibold text-3xl text-blue-300">Resultado</span>
                                        <span className="font-sora font-thin text-lg">Valor bruto calculado</span>
                                    </div>
                                </div>
                                {/* Title */}
                                <div className="w-full px-6 mt-2">
                                    <hr className="mt-1" />
                                </div>
                                {/* Value */}
                                <div className="w-full px-6 mt-2">
                                    <span className="font-sora font-semibold text-3xl text-blue-300">{<AnimatedNumber value={0} />}</span>
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