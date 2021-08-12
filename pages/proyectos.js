import Layout from '../components/Layout'

const Proyectos = () => (
  <Layout>
    <h1 className="text-center ">My Proyects</h1>
    <div className="container p-3">
      <div className="card-deck">
        <div className="card mb-2">
          <img src="portfolio-react.png" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Portfolio-React</h5>
            <p className="card-text">website made in react</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://portafolio-andy-santisteban.netlify.app/">
                https://portafolio-andy-santisteban.netlify.app/
              </a>{' '}
            </small>
          </div>
        </div>
        <div className="card mb-2">
          <img src="paginaweb.png" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Product catalog</h5>
            <p className="card-text">
              This website displays the products available in a store
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://avance-sitio-web.netlify.app/">
                https://avance-sitio-web.netlify.app/
              </a>{' '}
            </small>
          </div>
        </div>
        <div className="card mb-2">
          <img src="liga-española.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Players list</h5>
            <p className="card-text">
              This website shows you the updated players of the Spanish league
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://equipos-la-liga.netlify.app/">
                https://equipos-la-liga.netlify.app/
              </a>
            </small>
          </div>
        </div>
        <div className="card mb-2">
          <img src="portafolio.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Portfolio Basic</h5>
            <p className="card-text">A basic portfolio made in html, css</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://andysantisteban-paginaweb.netlify.app/">
                https://andysantisteban-paginaweb.netlify.app/
              </a>
            </small>
          </div>
        </div>
        <div className="card mb-2">
          <img src="CRUD-BASIC.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">CRUD agenda</h5>
            <p className="card-text">Crud made in PHP, MySql</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://github.com/AndySantisteban/Crud">
                https://github.com/AndySantisteban/Crud
              </a>{' '}
            </small>
          </div>
        </div>
        <div className="card mb-2">
          <img src="infotec-control-de-datos.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">warehouse and product control system</h5>
            <p className="card-text">
              Warehouse and sales control system made with php, js, mysql, html,
              css, bootstrap and xampp technologies
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">To go up</small>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Proyectos
