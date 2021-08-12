import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link href="/sobremi">
                  <a className="nav-link">About me</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/proyectos">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/github">
                  <a className="nav-link">Github</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
