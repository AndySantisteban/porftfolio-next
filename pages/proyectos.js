import Layout from '../components/Layout'
const Proyectos = () => (
  <Layout>
    <h3 className="text-center ">My Projects</h3>
          <div className="container__carousel">
              <div  className="container__carousel__img">
                <a href="https://blog-andy.vercel.app"  target={"_blank"}>
                  <img src="blog.png"  alt={"..."} width={"100%"}    />
                  <p className="container__carousel__img__footer">My Blog </p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/material-outlined/30/000000/markdown.png" alt="..."/>
                  <img src="https://img.icons8.com/cute-clipart/30/000000/react-native.png" alt="..."/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
                <a href="https://www.npmjs.com/package/jsonwebtoken-template" target={"_blank"}>
                <img src="npm-project-andy.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer"> JsonWebToken Hook NPM</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/java-web-token.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="..."/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
                <a href="https://infotec-cat-de-productos.vercel.app/" target={"_blank"}>
                  <img src="infotec.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer">Catalog</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/html-5--v1.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/css3.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png"alt="..."/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
                <a href="https://github.com/AndySantisteban/API-Equipos-de-futbol-Espa-a" target={"_blank"}>
                  <img src="liga-española.png" alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer">Api Spanish Liga</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/html-5--v1.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/css3.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png"alt="..."/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
              <a href="https://blog-de-notas.vercel.app/auth/register" target={"_blank"}>
                  <img src="notas.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer"> App Notes with Firebase  </p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/cute-clipart/30/000000/react-native.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/google-firebase-console.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="..."/>
                  </div>
              </a>
              </div>
              <div className="container__carousel__img">
                <a href="https://github.com/AndySantisteban/DSamiStore" target={"_blank"}>
                  <img src="CRUD-BASIC.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer"> Crud PHP D'SamiStore</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/html-5--v1.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/css3.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="..."/>
                  <img src="https://img.icons8.com/officel/30/000000/php-logo.png"  alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/mysql-logo.png"/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
                <a href="https://github.com/AndySantisteban/snake-filter-imagej" target={"_blank"}>
                  <img src="snake-filter.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer"> Filter Snake With Imagej</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/java-coffee-cup-logo--v1.png" alt="..."/>
                  <img src="https://imagej.net/media/icons/imagej2.png" width="30px" alt="..."/>
                  </div>
                </a>
              </div>
              <div className="container__carousel__img">
                <a href="http://3.93.189.69/" target={"_blank"}>
                  <img src="nube-industrial.png"  alt={"..."} width={"100%"}  />
                  <p className="container__carousel__img__footer">Nube Industrial</p>
                  <div className="container__carousel__img__footer__stack">
                  <img src="https://img.icons8.com/color/30/000000/material-ui.png" alt ="..."/>
                  <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="..."/>
                  <img src="https://img.icons8.com/cute-clipart/30/000000/react-native.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/graphql.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/apollo.png" alt="..."/>
                  <img src="https://img.icons8.com/color/30/000000/java-web-token.png" alt="..."/>
                  </div>
                </a>
              </div>
          </div>
          <h3 className="text-center ">Upcoming projects</h3>
          <div className="upcoming container__carousel">
              <p className="upcomming-text">Web Scapper</p>
              <p className="upcomming-text">React component package uploaded to npm </p>
              <p className="upcomming-text">Web Scapper</p>
          </div>
    <style jsx>
    {`
        .container__carousel{
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        }
        .container__carousel__img{
          border-radius: 10px;
          background-color: #E5E7EB;
        }
        img{
          border-radius: 10px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .container__carousel__img__footer{
          text-align: center;
        }
        .container__carousel__img:hover{
          box-shadow: 0px 0px 25px #00000029;
          transform: scale(1.05);
          transition:  0.5s ease-in-out;
        }
        .container__carousel__img__footer__stack{
          text-align: center;
          padding: 0.2rem;
        }
        a{
          color: #000000;
        }
        .upcoming{
          border-radius: 10px;
          background-color: #E5E7EB;
          padding: 1rem;
          box-shadow: 0px 0px 25px #00000029;
          font-size: 12px;
        }
        .upcomming-text{
          text-align: center;
        }
    `}
    </style>
  </Layout>
)
export default Proyectos
