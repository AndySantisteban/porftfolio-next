import Navbar from './Navbar'

const Layout = ({children}) => (
    <>
        <Navbar/>
        <main className="container">{children}</main>
        <style global jsx>
            {`
              html {
                font-family: 'Inter', sans-serif;
              }

              body {
                margin: 0;
                padding: 0;
                display: block;
                font-family: 'Inter', sans-serif;
              }

              * {
                box-sizing: border-box;
              }

              *::before, *::after {
                box-sizing: border-box;
              }

              ul {
                margin: 0;
                list-style: none;
                padding: 0;
              }

              a {
                text-decoration: none;
              }

              main {
                padding: 3rem;

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
                cursor: pointer;
              }
            `}
        </style>
    </>
)
export default Layout
