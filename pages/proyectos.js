import Fade from "react-reveal/Fade";
import Anchor from "../components/Anchor";
import IconStack from "../components/IconStack";
import Layout from "../components/Layout";
import More from "../components/More";
const Proyectos = () => (
  <Layout>
    <h3 className="text-center ">My Projects</h3>
    <Fade>
      <div className="container__carousel">
        <div className="container__carousel__img">
          <Anchor href="https://blog-andy.vercel.app" target={"_blank"} />
          <img src="blog.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer">My Blog </p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={
                "https://img.icons8.com/material-outlined/30/000000/markdown.png"
              }
              props={"Markdown"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/react-native.png"}
              props={"React"}
            />
          </div>
          <More href="/projects/blog" props={"See more ..."} />
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="https://www.npmjs.com/package/jsonwebtoken-template"
            target={"_blank"}
          />
          <img
            src="npm-project-andy.png"
            alt={"..."}
            width={"100%"}
            height={"55%"}
          />
          <p className="container__carousel__img__footer">
            {" "}
            JsonWebToken Hook NPM
          </p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/java-web-token.png"}
              props={"JWT"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/nodejs.png"}
              props={"Node.js"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/npm.png"}
              props={"NPM"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/javascript.png"}
              props={"Javascript"}
            />
          </div>
          <More href="/projects/jwt" props={"See more ..."} />
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="https://infotec-cat-de-productos.vercel.app/"
            target={"_blank"}
          />
          <img src="infotec.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer">Catalog</p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/html-5--v1.png"}
              props={"HTML5"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/css3.png"}
              props={"CSS3"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/javascript.png"}
              props={"Javascript"}
            />
          </div>
          <More href="/projects/infotec" props={"See more ..."} />
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="https://blog-de-notas.vercel.app/auth/register"
            target={"_blank"}
          />
          <img src="notas.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer">
            {" "}
            App Notes with Firebase{" "}
          </p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/firebase.png"}
              props={"Firebase"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/javascript.png"}
              props={"Javascript"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/react-native.png"}
              props={"React"}
            />
          </div>
          <More href="/projects/notas" props={"See more ..."} />
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="http://boticabelen.ml/DSamiStore/src/"
            target={"_blank"}
          />
          <img src="CRUD-BASIC.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer">D'SamiStore</p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/html-5--v1.png"}
              props={"HTML5"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/css3.png"}
              props={"CSS3"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/javascript.png"}
              props={"Javascript"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/mysql-logo.png"}
              props={"MySql"}
            />
            <IconStack
              src={"https://img.icons8.com/officel/30/000000/php-logo.png"}
              props={"PHP"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/bootstrap.png"}
              props={"Bootsrap"}
            />
          </div>
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="https://github.com/AndySantisteban/snake-filter-imagej"
            target={"_blank"}
          />
          <img
            src="snake-filter.png"
            alt={"..."}
            width={"100%"}
            height={"55%"}
          />
          <p className="container__carousel__img__footer">
            {" "}
            Filter Snake With Imagej
          </p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/java.png"}
              props={"Java"}
            />
            <IconStack
              src={"https://imagej.net/media/icons/imagej2.png"}
              props={"ImageJ"}
              width={"30px"}
            />
          </div>
          <More href="/projects/snake" props={"See more ..."} />
        </div>
        <div className="container__carousel__img">
          <Anchor
            href="https://www.npmjs.com/package/test-and-convert-types"
            target={"_blank"}
          />
          <img src="package1.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer"> Package NPM test</p>
          <div className="container__carousel__img__footer__stack">
            <IconStack
              src={"https://img.icons8.com/color/30/000000/nodejs.png"}
              props={"Node.js"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/npm.png"}
              props={"NPM"}
            />
            <IconStack
              src={"https://img.icons8.com/color/30/000000/javascript.png"}
              props={"Javascript"}
            />
          </div>
          <More
            href="/projects/test-and-convert-types"
            props={"See more ..."}
          />
        </div>
        <div className="container__carousel__img">
          <Anchor href="https://nubeindustrial.com/" target={"_blank"} />
          <img
            src="nube-industrial.png"
            alt={"..."}
            width={"100%"}
            height={"55%"}
          />
          <p className="container__carousel__img__footer container__carousel">
            Nube Industrial - Home Page
          </p>
          <div className="container__carousel__img__footer__stack container__carousel__img__preview">
            <span title="React">
              <img
                src="https://img.icons8.com/color/30/000000/react-native.png"
                alt="..."
              />
            </span>
            <span title="Typescript">
              <img
                src="https://img.icons8.com/color/30/000000/typescript.png"
                alt="..."
              />
            </span>
            <span title="AWS">
              <img
                src="https://img.icons8.com/color/30/null/amazon-web-services.png"
                alt="..."
              />
            </span>
            <span title="NGINX">
              <img
                src="https://img.icons8.com/color/30/null/nginx.png"
                alt="..."
              />
            </span>
            <span title="Docker">
              <img
                src="https://img.icons8.com/fluency/30/null/docker.png"
                alt="..."
              />
            </span>
          </div>
        </div>
        <div className="container__carousel__img">
          <Anchor href="https://app.nubeindustrial.com/" target={"_blank"} />
          <img
            src="appnubeindustrial.jpg"
            alt={"..."}
            width={"100%"}
            height={"55%"}
          />
          <p className="container__carousel__img__footer container__carousel">
            Nube Industrial - App
          </p>
          <div className="container__carousel__img__footer__stack container__carousel__img__preview">
            <span title="React">
              <img
                src="https://img.icons8.com/color/30/000000/react-native.png"
                alt="..."
              />
            </span>
            <span title="JavaScript">
              <img
                src="https://img.icons8.com/color/30/000000/typescript.png"
                alt="..."
              />
            </span>
            <span title="GraphQL">
              <img
                src="https://img.icons8.com/color/30/000000/graphql.png"
                alt="..."
              />
            </span>
            <span title="Apollo Client/Server">
              <img
                src="https://img.icons8.com/color/30/000000/apollo.png"
                alt="..."
              />
            </span>
            <span title="JWT">
              <img
                src="https://img.icons8.com/color/30/000000/java-web-token.png"
                alt="..."
              />
            </span>
            <span title="NGINX">
              <img
                src="https://img.icons8.com/color/30/null/nginx.png"
                alt="..."
              />
            </span>
            <span title="Docker">
              <img
                src="https://img.icons8.com/fluency/30/null/docker.png"
                alt="..."
              />
            </span>
          </div>
        </div>
        <div className="container__carousel__img">
          <Anchor href="http://sisgecli.ga" target={"_blank"} />
          <img src="sisgecli.png" alt={"..."} width={"100%"} height={"55%"} />
          <p className="container__carousel__img__footer container__carousel">
            Sisgecli - App
          </p>
          <div className="container__carousel__img__footer__stack container__carousel__img__preview">
            <span title="React">
              <img
                src="https://img.icons8.com/color/30/000000/react-native.png"
                alt="..."
              />
            </span>
            <span title="Typescript">
              <img
                src="https://img.icons8.com/color/30/000000/typescript.png"
                alt="..."
              />
            </span>
            <span title="Microservices">
              <img
                src="https://img.icons8.com/arcade/30/null/network.png"
                alt="..."
              />
            </span>
            <span title="Express.js">
              <img
                src="https://img.icons8.com/color/30/null/express-js.png"
                alt="..."
              />
            </span>
            <span title="Node.js">
              <img
                src="https://img.icons8.com/color/30/null/nodejs.png"
                alt="..."
              />
            </span>
            <span title="AWS">
              <img
                src="https://img.icons8.com/color/30/null/amazon-web-services.png"
                alt="..."
              />
            </span>
            <span title="JWT">
              <img
                src="https://img.icons8.com/color/30/000000/java-web-token.png"
                alt="..."
              />
            </span>
            <span title="NGINX">
              <img
                src="https://img.icons8.com/color/30/null/nginx.png"
                alt="..."
              />
            </span>
            <span title="Docker">
              <img
                src="https://img.icons8.com/fluency/30/null/docker.png"
                alt="..."
              />
            </span>
          </div>
        </div>
        <div className="container__carousel__img__comming">
          <small className="container__carousel__img__footer">
            These are some of my projects, most of them are on github, if you
            want to know more about my projects, you can contact me and I will
            tell you my ideas. Nowadays I advocate for big projects
          </small>
        </div>
      </div>
    </Fade>
    <style jsx>
      {`
        .container__carousel {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        }

        .container__carousel__img {
          background-color: #f9fafb;
          position: relative;
        }
        .container__carousel__img__comming {
          background-color: #f9fafb;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container__carousel__img__preview {
          background-color: #f9fafb;
          position: relative;
          color: transparent;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        img {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .container__carousel__img__footer {
          text-align: center;
          webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .container__carousel__img:hover {
          box-shadow: 0px 0px 25px #00000029;
          transition: 0.5s ease-in-out;
        }

        .container__carousel__img__footer__stack {
          text-align: center;
          padding: 0.2rem;
        }

        .container__carousel__img__anchor {
          position: absolute;
          right: -10px;
          top: -10px;
        }

        .container__carousel__img__anchor__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1f2227;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        container__carousel__img__more {
          position: relative;
        }
        .container__carousel__more {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-weight: bold;
        }
        a {
          color: #000000;
        }

        .upcoming {
          border-radius: 10px;
          background-color: #e5e7eb;
          padding: 1rem;
          box-shadow: 0px 0px 25px #00000029;
          font-size: 12px;
        }

        .upcomming-text {
          text-align: center;
        }
      `}
    </style>
  </Layout>
);
export default Proyectos;
