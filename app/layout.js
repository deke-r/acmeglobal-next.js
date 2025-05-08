import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bootstrap from "../utils/Bootstrap";
import '../styles/global.css';
import TawkToWidget from '../components/TawkToWidget';
import Head from 'next/head'; // Import Head



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <TawkToWidget />
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
