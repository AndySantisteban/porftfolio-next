import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade';
import Anchor from '../components/Anchor'
import More from '../components/More'
import IconStack from "../components/IconStack";
const Proyectos = () => (
    <Layout>
        <h3 className="text-center ">My Projects</h3>
        <Fade>
            <div className="container__carousel">
                <div className="container__carousel__img">
                    <Anchor href="https://blog-andy.vercel.app" target={"_blank"}/>
                    <img src="blog.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer">My Blog </p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/material-outlined/30/000000/markdown.png"} props={"Markdown"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/react-native.png"} props={"React"}/>
                    </div>
                    <More href="/projects/blog" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                    <Anchor href="https://www.npmjs.com/package/jsonwebtoken-template" target={"_blank"}/>
                    <img src="npm-project-andy.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer"> JsonWebToken Hook NPM</p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/java-web-token.png"} props={"JWT"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/nodejs.png"} props={"Node.js"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/npm.png"} props={"NPM"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                    </div>
                    <More href="/projects/jwt" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                    <Anchor href="https://infotec-cat-de-productos.vercel.app/" target={"_blank"}/>
                    <img src="infotec.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer">Catalog</p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/html-5--v1.png"} props={"HTML5"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/css3.png"} props={"CSS3"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                    </div>
                    <More href="/projects/infotec" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                    <Anchor href="https://blog-de-notas.vercel.app/auth/register" target={"_blank"}/>
                    <img src="notas.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer"> App Notes with Firebase </p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/firebase.png"} props={"Firebase"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/react-native.png"} props={"React"}/>
                    </div>
                    <More href="/projects/notas" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                    <Anchor href="https://github.com/AndySantisteban/DSamiStore" target={"_blank"}/>
                    <img src="CRUD-BASIC.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer">D'SamiStore</p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/html-5--v1.png"} props={"HTML5"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/css3.png"} props={"CSS3"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/mysql-logo.png"} props={"MySql"}/>
                        <IconStack src={"https://img.icons8.com/officel/30/000000/php-logo.png"} props={"PHP"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/bootstrap.png"} props={"Bootsrap"}/>
                    </div>
                    <More href="/projects/dsamistore" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                <Anchor href="https://github.com/AndySantisteban/snake-filter-imagej" target={"_blank"}/>
                <img src="snake-filter.png" alt={"..."} width={"100%"} height={"55%"}/>
                <p className="container__carousel__img__footer"> Filter Snake With Imagej</p>
                <div className="container__carousel__img__footer__stack">
                    <IconStack src={"https://img.icons8.com/color/30/000000/java.png"} props={"Java"}/>
                    <IconStack src={"https://imagej.net/media/icons/imagej2.png"} props={"ImageJ"} width={"30px"}/>
                </div>
                <More href="/projects/snake" props={"See more ..."}/>
            </div>
                <div className="container__carousel__img">
                    <Anchor href="https://github.com/AndySantisteban/DSamiStore" target={"_blank"}/>
                    <img src="CRUD-BASIC.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer">D'SamiStore</p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/html-5--v1.png"} props={"HTML5"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/css3.png"} props={"CSS3"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/mysql-logo.png"} props={"MySql"}/>
                        <IconStack src={"https://img.icons8.com/officel/30/000000/php-logo.png"} props={"PHP"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/bootstrap.png"} props={"Bootsrap"}/>
                    </div>
                    <More href="/projects/dsamistore" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img">
                    <Anchor href="https://www.npmjs.com/package/test-and-convert-types" target={"_blank"}/>
                    <img src="package1.png" alt={"..."} width={"100%"} height={"55%"}/>
                    <p className="container__carousel__img__footer"> Package NPM test</p>
                    <div className="container__carousel__img__footer__stack">
                        <IconStack src={"https://img.icons8.com/color/30/000000/nodejs.png"} props={"Node.js"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/npm.png"} props={"NPM"}/>
                        <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                    </div>
                    <More href="/projects/test-and-convert-types" props={"See more ..."}/>
                </div>
                <div className="container__carousel__img__preview">
                    <img src="nube-industrial.png"  alt={"..."} width={"100%"} height={"55%"} className={"container__carousel__img__preview"} />
                    <p className="container__carousel__img__footer container__carousel">.....................</p>
                    <div className="container__carousel__img__footer__stack container__carousel__img__preview">
                        <span title="Bootrapp">
                          <img src="https://img.icons8.com/color/30/000000/bootstrap.png" alt ="..."/>
                        </span>
                        <span  title="Material UI">
                          <img src="https://img.icons8.com/color/30/000000/material-ui.png" alt ="..."/>
                        </span>
                        <span  title="React">
                          <img src="https://img.icons8.com/color/30/000000/react-native.png" alt ="..."/>
                        </span>
                        <span title="JavaScript">
                          <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="..."/>
                        </span>
                        <span title="GraphQL">
                          <img src="https://img.icons8.com/color/30/000000/graphql.png" alt="..."/>
                        </span>
                        <span title="Apollo Client/Server">
                          <img src="https://img.icons8.com/color/30/000000/apollo.png" alt="..."/>
                        </span>
                        <span title="JWT">
                          <img src="https://img.icons8.com/color/30/000000/java-web-token.png" alt="..."/>
                        </span>
                    </div>
                </div>
                <div className="container__carousel__img__comming">
                        <p className="container__carousel__img__footer"> If you want to know more about my projects, you can contact me and I will tell you my ideas...</p>
                </div>
            </div>
        </Fade>
        <style jsx>
            {`
              .container__carousel {
                display: grid;
                gap: 2rem;
                grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
              }

              .container__carousel__img {
                border-radius: 10px;
                background-color: #F9FAFB;
                position: relative;

              }
              .container__carousel__img__comming{
                border-radius: 10px;
                background-color: #F9FAFB;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .container__carousel__img__preview{
                border-radius: 10px;
                background-color: #F9FAFB;
                position: relative;
                filter: blur(2px);
                color: transparent;
                text-shadow: 0 0 5px rgba(0,0,0,0.2);
                webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none; 
              }

              img {
                border-radius: 10px;
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
                background: #1F2937;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
              }
              container__carousel__img__more{
                border-radius: 10px;
                position: relative;
              }
              .container__carousel__more{
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
                background-color: #E5E7EB;
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
)
export default Proyectos
