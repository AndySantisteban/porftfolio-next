import Layout from "../../components/Layout";
import Return from "../../components/Return";
import Fade from 'react-reveal/Fade';
import Grid from "../../components/Grid";
import IconStack from "../../components/IconStack";
const Infotec = () => {
    return (
        <Layout>
            <Return/>
            <Fade>
                <h1>Infotec</h1>
                <hr/>
                <p>
                    Infotec is a company that provides information technology services to the public.<br/>
                </p>
                <p>
                    They provide quality products for the daily life of people who are technology lovers, such as cell phones, laptops, printers and other accessories related to the world of video games, at the best price.
                </p>
                <p>
                    In this project we make a small catalog of products in a static way.
                </p>
                <p>
                   <b>Project preview:</b>
                </p>
                <p>
                    Visit: <a href="https://infotec-cat-de-productos.vercel.app/" target="_blank" rel="noopener noreferrer">https://infotec-cat-de-productos.vercel.app/</a>
                </p>
                <p>Stack:</p>
                <div>
                    <IconStack src={"https://img.icons8.com/color/30/000000/html-5--v1.png"} props={"HTML5"}/>
                    <IconStack src={"https://img.icons8.com/color/30/000000/css3.png"} props={"CSS3"}/>
                    <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                </div>
                <Grid>
                    <img src="../infotec.png" alt="Infotec" width={"80%"}/>
                    <img src="../infotec-1.png" alt="Infotec" width={"80%"}/>
                    <img src="../infotec-2.png" alt="Infotec" width={"80%"}/>
                </Grid>
            </Fade>
        </Layout>
    )
}
export default Infotec;