import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li>
                        <Link href="/">
                            <a className="navbar__list__item ">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobremi">
                            <a className="navbar__list__item">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/proyectos">
                            <a className="navbar__list__item">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/github">
                            <a className="navbar__list__item">Github</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacto">
                            <a className="navbar__list__item">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style jsx>
                {`
                  .navbar {
                    background: #1F2937;
                  }

                  .navbar__list {
                    display: flex;
                    justify-content: flex-start;
                    color: white;
                    padding: 1rem 1rem;
                  }

                  .navbar__list__item {
                    color: white;
                    padding: 0 0.5rem;
                    font-size: 13px;

                  }

                  .navbar__list__item:hover {
                    color: gray;
                  }

                  @media (max-width: 768px) {
                    .navbar__list {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    }
                  }
                `}
            </style>
        </>
    )
}
export default Navbar
