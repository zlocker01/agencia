import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'Agencia',
  description: 'agencia de desarrollo web y marketing mexico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Agencia</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
