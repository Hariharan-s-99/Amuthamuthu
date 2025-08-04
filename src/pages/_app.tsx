import { Inter, Poppins } from 'next/font/google';
import '../styles/global.css';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}