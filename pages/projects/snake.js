import Layout from '../../components/Layout'
import Return from '../../components/Return'
import Fade from 'react-reveal/Fade';
import Grid from "../../components/Grid";
import IconStack from "../../components/IconStack";

const Snake = () => {
    return (
        <Layout>
            <Fade>
                <Return/>
                <h1>Filter Snake</h1>
                <hr/>
                <p>
                    Plug-in filter based on the SNAKE technique that allows the tracing of images, identifying areas
                    accurately.
                </p>
                <p>
                    <b>Usage</b>
                </p>
                <p>
                    Install Imagej from its official website.
                </p>
                <p>
                    馃憠 <a href="https://imagej.nih.gov/ij/download.html">https://imagej.nih.gov/ij/download.html</a>
                </p>
                <p>
                    <b>Abstract</b>
                </p>
                <p>
                    La elaboraci贸n y ejecuci贸n del presente filtro codificado en lenguaje Java se realiz贸 mediante el
                    uso del lenguaje Java y se logr贸 mediante el uso del software ImageJ y NetBeans, permitiendo as铆
                    comprobar que el m茅todo utilizado presenta resultados satisfactorios en la segmentaci贸n de im谩genes
                    debido a sus mejores resultados en im谩genes de extremos que presenta mejores resultados en im谩genes
                    de endoscopia que en im谩genes de ultrasonido.
                </p>
                <p>Stack:</p>
                <div>
                    <IconStack src={"https://img.icons8.com/color/30/000000/java.png"} props={"Java"}/>
                    <IconStack src={"https://imagej.net/media/icons/imagej2.png"} props={"ImageJ"} width={"30px"}/>
                </div>
                <p>
                    <b>Preview</b>
                </p>
                <Grid>
                    <img src="../snake-filter.png" alt="filter" width={"80%"}/>
                    <img src="../filter-2.png" alt="filter2" width={"80%"}/>
                    <img src="../filter-3.png" alt="filter3" width={"80%"}/>
                    <img src="../filter-4.png" alt="filter4" width={"80%"}/>
                    <img src="../filter-5.png" alt="filter5" width={"80%"}/>
                </Grid>
            </Fade>
        </Layout>
    )
}
export default Snake