import Layout from '../components/Layout'

const Proyectos = () => (
  <Layout>
    <h1 className="text-center ">My Projects</h1>
    <div className="container p-3">
      <div className="card-group">
        <div className="card mb-2 ms-2 me-2">
          <img src="blog.png" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Blog Andy Santisteban</h5>
            <p className="card-text">Blog Personal made in Next.js</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://blog-andy.vercel.app/">
                https://blog-andy.vercel.app/
              </a>{' '}
            </small>
          </div>
        </div>
        <div className="card mb-2 ms-2 me-2">
          <img src="infotec.png" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Product catalog Infotec</h5>
            <p className="card-text">
              This website displays the products available in a store (Advance)
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://infotec-cat-de-productos.vercel.app/">
                https://infotec-cat-de-productos.vercel.app/
              </a>{' '}
            </small>
          </div>
        </div>
        <div className="card mb-2 ms-2 me-2">
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
      </div>
      <div className="card-group">
        <div className="card mb-2 ms-2 me-2">
          <img src="notas.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Notes App</h5>
            <p className="card-text">App Notes using Firebase!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://blog-de-notas.vercel.app/auth/register">
                https://blog-de-notas.vercel.app/auth/register
              </a>
            </small>
          </div>
        </div>
        <div className="card mb-2 ms-2 me-2">
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
        <div className="card mb-2 ms-2 me-2">
          <img src="jni.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Nazareno's Church</h5>
            <p className="card-text">(Advance)</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Site:{' '}
              <a href="https://jni-ferrenafe.vercel.app/">
                https://jni-ferrenafe.vercel.app/
              </a>{' '}
            </small>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Proyectos
