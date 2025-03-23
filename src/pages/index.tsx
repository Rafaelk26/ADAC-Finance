import Head from "next/head";

// Images
import Image from "next/image";
import LogoADAC from '../assets/images/ADAC LOGO-White.png'

// CSS
import styles from '../styles/home.module.css';

export default function Home() {

  const data = new Date();

  return (
    <>
      <Head>
        <title>ADAC Finance | A Gestão Financeira de sua igreja</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.wrapper} 
      flex flex-col justify-between w-full items-center
      md:flex md:flex-col md:max-w-full md:justify-between md:h-screen md:mt-0
      `}>

        {/* Background Image */}
        <div className={styles.backgroundImage}></div>

        {/* Header */}
        <header className="w-full flex justify-center
        md:max-w-7xl md:w-full md:mx-auto md:flex md:justify-between md:ms-10
        lg:ms-10
        xl:ms-auto
        ">
          <div className="mt-4 md:mt-2">
            <Image className="w-20" src={LogoADAC} alt="ADAC" />
          </div>
          <div></div>
        </header>

        {/* Body page */}
        <main className="w-full flex flex-col items-center justify-center
        md:max-w-7xl md:mx-auto md:ms-10 md:items-start md:justify-start
        lg:ms-10
        xl:ms-auto">
          <div className="flex flex-col justify-center items-center gap-y-4
          md:justify-start md:items-start md:gap-0 md:mt-10">
            <h4 className="font-sora font-extralight text-xl
            md:text-2xl
            ">
              ADAC Finance
            </h4>

            <h1 className="mt-4 mb-8 font-sora font-semibold text-3xl/tight text-center
            sm:text-5xl/tight sm:text-center
            md:text-6xl/tight md:text-start">
              Transparência e <br />organização financeira <br />da igreja
            </h1>

            <a 
            href="/login"
            className="border-white border border-solid py-2 px-10 rounded-md transition-all duration-200 
            hover:text-black hover:bg-white hover:scale-105
            sm:py-3 sm:px-12
            md:py-4 md:px-14 ">
              <span className="font-semibold text-2xl">Entrar</span>
            </a>
          </div>
          <div></div>
        </main>

        {/* Footer */}
        <footer className="max-w-7xl w-full mx-auto flex justify-center">
          <span className="font-sora font-light text-lg mb-4 text-center
          md:text-xl md:mb-2 md:text-start
          ">
            {`ADAC Finance © Copyright ${data.getFullYear()}`}
          </span>
        </footer>

      </div>
    </>
  );
}
