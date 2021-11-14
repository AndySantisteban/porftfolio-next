import Layout from '../components/Layout'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
const Proyectos = () => (
  <Layout>
    <h3 className="text-center ">My Projects</h3>
      <div className="container__carousel">
          <Carousel
              responsive={responsive}
          >
              <div  className="container__carousel__img">
                  <img src="blog.png"  alt={"..."} width={"100%"}    />
                  <p>My Blog : <span><a href="https://blog-andy.vercel.app" target={"_blank"}>https://blog-andy.vercel.app</a></span></p>
              </div>
              <div className="container__carousel__img">
                  <img src="infotec.png"  alt={"..."} width={"100%"}  />
                  <p>Catalogo</p>
              </div>
              <div className="container__carousel__img">
                  <img src="liga-española.png" alt={"..."} width={"100%"}  />
                  <p>Api Spanish Liga</p>
              </div>
              <div className="container__carousel__img">
                  <img src="notas.png"  alt={"..."} width={"100%"}  />
                  <p> App Notes with Firebase : <span><a href="https://blog-de-notas.vercel.app" target={"_blank"}>https://blog-de-notas.vercel.app</a></span></p>
              </div>
              <div className="container__carousel__img">
                  <img src="CRUD-BASIC.png"  alt={"..."} width={"100%"}  />
                  <p> Crud PHP D'SamiStore</p>
              </div>
          </Carousel>
      </div>
    <style jsx>
    {`
        .container__carousel{
          width: 80%;
          margin :0 auto;
        }
        @media (max-width: 768px) {
          .container__carousel{
            width: 100%;
          }
        }
    `}
    </style>
  </Layout>
)
export default Proyectos
