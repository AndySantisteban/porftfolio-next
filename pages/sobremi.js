import Image from "next/image";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import IconStack from "../components/IconStack";
import Layout from "../components/Layout";

const myLoader = ({ src, width, quality }) => {
  return `https://andysantisteban.soy.pe/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="yo2.jpg"
      alt="AndySantisteban"
      width={250}
      height={250}
      className={props.className}
      loading={"lazy"}
    />
  );
};
const Sobremi = () => (
  <Layout>
    <div className="layout__index">
      <div>
        <MyImage className="layout__index__img" />
        <ul className="layout__index__container">
          <li>
            <small>
              Email: <a></a>
              andyjosue160720@gmail.com
            </small>{" "}
          </li>
          <li>
            <small>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/andy-santisteban/"
                target={"_blank"}
              >
                andy-santisteban
              </a>
            </small>{" "}
          </li>
          <li>
            <small>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/AndySantisteban1607/"
                target={"_blank"}
              >
                AndySantisteban
              </a>
            </small>{" "}
          </li>
          <li>
            <small>
              Github:{" "}
              <a href="https://github.com/AndySantisteban" target={"_blank"}>
                AndySantisteban
              </a>
            </small>
          </li>
          <li>
            <small>
              Twitter:{" "}
              <a href="https://twitter.com/SantistebanAndy" target={"_blank"}>
                @SantistebanAndy
              </a>{" "}
            </small>
          </li>
          <li>
            <small>
              NPM:{" "}
              <a
                href="https://www.npmjs.com/~andy_santisteban"
                target={"_blank"}
              >
                andy_santisteban
              </a>
            </small>
          </li>
        </ul>
      </div>
      <div className="layout__index__container">
        <Fade>
          <div>
            <h1 className="container__header" style={{ margin: 0 }}>
              Andy Santisteban
            </h1>
            <h3 className="container__header" style={{ margin: 0 }}>
              Web Developer
            </h3>
            <small>@AndySantisteban</small>
            <p className=" container__body">
              Professional web developer, responsible and efficient, with
              extensive knowledge in frontend development, taking the initiative
              to carry out new implementations, that leads to be able to create
              scalable products with architectures that should be used in all
              projects but unfortunately do not get to implement as DDD, Clean
              Architecture and TDD.
              <br />
              In my experience I have been able to work in any kind of projects
              (mostly as FreeLancer), from just frontend to where I cover more
              roles and thanks to that I understand and watch over the welfare
              of the project with the technology that is required for the
              moment.
              <br />
              Adding to the above I am a person who likes to work in a team that
              suits the environment in which he works and provides encouragement
              to his teammates.
              <br />I like to work day and night if necessary to move forward
              the project with the role that I am given.
            </p>
            <p>
              <b>Stack:</b>
            </p>
            <p>Languages:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                <IconStack src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
                <IconStack src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
              </div>
            </Slide>
            <p>Web:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                <IconStack src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                <IconStack src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
              </div>
            </Slide>
            <p>Mobile:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAF" />
                <IconStack src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
              </div>
            </Slide>
            <p>Backend:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Deno-white?style=for-the-badge&logo=deno&logoColor=464647" />
              </div>
            </Slide>
            <p>Databases:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/POSGREST-005C84?style=for-the-badge&logo=postgres&logoColor=white" />
              </div>
            </Slide>
            <p>Devops:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
              </div>
            </Slide>
            <p>Testing:</p>
            <Slide left>
              <div className="container__skills">
                <IconStack src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
                <IconStack src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" />
              </div>
            </Slide>
          </div>
        </Fade>
      </div>
    </div>
    <style jsx>
      {`
        .layout__index {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border: none;
        }

        .container__body {
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
          color: #1f2227;
          border: none;
          padding: 10px 5px;
          cursor: pointer;
          margin: 5px;
        }

        .btn__primary:hover {
          background: #1f2227;
          color: white;
        }

        .layout__index__container {
          padding: 20px;
          width: 70%;
        }

        .container__skills__item {
          margin: 5px;
        }

        @media (max-width: 768px) {
          .layout__index {
            flex-direction: column;
          }

          .layout__index__container {
            width: 100%;
          }
        }
      `}
    </style>
    <style jsx global>
      {`
        .layout__index__img {
          border-radius: 50%;
          width: 30%;
        }

        @media (max-width: 768px) {
          .layout__index__img {
            width: 100%;
          }
        }
      `}
    </style>
  </Layout>
);
export default Sobremi;
