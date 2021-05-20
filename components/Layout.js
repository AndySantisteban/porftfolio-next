import Navbar from './Navbar'
import Head from 'next/head'
const Layout = ({children})=>(
    <>
    <Head>
        <title>My portfolio - andy santisteban</title>
    </Head>
    <Navbar/>
    <main className="container py-4">
    {children}
    </main>

    </>

)
export default Layout;


