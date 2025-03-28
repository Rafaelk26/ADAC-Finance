import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react';
import { useRouter } from "next/router";

// Middleware
import { Private } from '../middleware/private'

// Routes.ts
import { privateRoutes } from '../routes'

// Fonts
import { Sora } from "next/font/google";

// Importando a fonte Sora
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora", // Criando uma variável CSS para a fonte
});

export default function App({ Component, pageProps }: AppProps) {
  
  // Cria rotas para redirecionamento
  const router = useRouter()

  // Verifica se existe sessão do usuário
  const RoutesProvider = privateRoutes.includes(router.pathname)

  return (
    <SessionProvider session={pageProps.session}>
        <div className={sora.variable}>
          {RoutesProvider ? (
            <Private>
              <Component {...pageProps} />
            </Private>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
    </SessionProvider>
  );
}
