import Layout from '../components/Layout'
import Link from "next/link";
import Image from "next/image";


const myLoader = ({ src, width, quality, }) => {
  return `https://andysantisteban.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
      <Image
          loader={myLoader}
          src="yo2.jpg"
          alt="AndySantisteban"
          width={300}
          height={300}
          className={props.className}
          loading={"lazy"}
      />
  )
}
const Sobremi = () => (
  <Layout>
    <div className='layout__index'>
      <div>
        <MyImage className='layout__index__img'/>
      </div>
      <div className="layout__index__container">
        <div >
          <h1 className="container__header">Andy Santisteban</h1>
          <h3 className="container__header">Web Developer</h3>
          <p className=" container__body">
            I'm Andy Santisteban, web developer, I'm 21 years old and I live in Chiclayo, Peru.
          </p>
          <p className="container__body">
            In my life I have liked to learn about computers and programming being this now my passion and my day to day.
          </p>
          <p className="container__body">
            I am a systems engineering student who likes to investigate and never stop learning in order to implement new things in this wide branch as web development.
          </p>
          <p className="container__body">
            I have time in web development and over time I have realized how important it is to have a discipline to develop.
          </p>
          <p className="container__body">
            Right now I am a freelance web developer and student of the Señor de Sipan University and I am in the 7th academic cycle, that has led me to understand patterns, structures and good practices.
          </p>
          <p className="container__body">
            <b>I am willing to do my best for your company and be a better competitor in the market.</b>
          </p>
          <p>
            <b>Stack:</b>
          </p>
          <div className="container__skills">
            <img src="https://img.icons8.com/color/32/000000/html-5--v1.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/css3.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/html-5--v2.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/officel/32/000000/php-logo.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/fluency/32/000000/mysql-logo.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/fluency/32/000000/node-js.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/ultraviolet/32/000000/react--v2.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/material-ui.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/bootstrap.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/graphql.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/apollo.png"
                 className="container__skills__item"
                 alt={"..."}
            />
            <img src="https://img.icons8.com/color/32/000000/mongodb.png"
                 className="container__skills__item"
                 alt={"..."}
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        
        .layout__index {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          padding: 50px 20px;
          border:none;
          border-radius: 10px;
          box-shadow: 0px 0px 50px #eaeaea;
        }
        .container__body{
          text-align: justify;
        }
        .container__footer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        .btn__primary {
          background: white;
          color: #1F2937;
          border: none;
          padding: 10px 5px;
          cursor: pointer;
          margin: 5px;
        }
        .btn__primary:hover {
          background: #1F2937;
          color: white
        }
        .layout__index__container{
          padding:20px;
          width: 70%;
        }
        .container__skills__item{
        margin: 5px;
        }
        @media (max-width: 768px) {
          .layout__index {
            flex-direction: column;
          }
          .layout__index__container{
            width: 100%;
          }
        }
      `}
    </style>
    <style jsx global>
      {`
        .layout__index__img{
          border-radius: 50%;
          width: 30%;
        }
        @media (max-width: 768px) {
          .layout__index__img{
            width: 100%;
          }
        }
      `}
    </style>
  </Layout>
)
export default Sobremi
