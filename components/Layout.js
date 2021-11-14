import Navbar from './Navbar'
import Head from 'next/head'
const Layout = ({ children }) => (
  <>
    <Head>
      <title>My portfolio - Andy santisteban</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
        />
    </Head>
    <Navbar />
    <main className="container">{children}</main>
      <style global jsx>
          {`
            body {
            margin:0;
            padding:0;
            display: block;
            font-family: 'Inter', sans-serif;
            }
            *{
              box-sizing: border-box;
            }
            *::before, *::after {
              box-sizing: border-box;
            }
            ul{
              margin:0px;
              list-style: none;
              padding:0;
            }
            a {
              text-decoration: none;
            }
            main {
              padding:3rem;
              
            }
            button {
              border: none;
              border-radius: 5px;
              padding: 10px;
              text-transform: uppercase;
              font-weight: bold;
              font-family: 'Inter', sans-serif;
              background: #1F2937;
              color: white;
            }
          `}
      </style>
  </>
)
export default Layout
