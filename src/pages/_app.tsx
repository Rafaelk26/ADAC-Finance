import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Sora } from "next/font/google";

// Importando a fonte Sora
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora", // Criando uma variável CSS para a fonte
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={sora.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
