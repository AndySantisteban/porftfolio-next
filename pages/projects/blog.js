import Layout from '../../components/Layout'
import Return from '../../components/Return'
import IconStack from "../../components/IconStack";
import Fade from 'react-reveal/Fade';
import Grid from "../../components/Grid";
const Blog = () => {
    return (
        <Layout>
            <Return/>
            <Fade>
                <h1>Blog</h1>
                <hr/>
                <p>
                    This is my blog in which I will be publishing those things that happen to me on a daily basis.
                </p>
                <p>
                    <b>Project preview:</b>
                </p>
                <p>
                    Visit: <a href="https://blog-andy.vercel.app/" target="_blank" rel="noopener noreferrer">https://blog-andy.vercel.app/</a>
                </p>
                <p>Stack:</p>
                <div>
                    <IconStack src={"https://img.icons8.com/material-outlined/30/000000/markdown.png"} props={"Markdown"}/>
                    <IconStack src={"https://img.icons8.com/color/30/000000/react-native.png"} props={"React"}/>
                </div>
                <Grid>
                    <img src="../blog-1.png" alt="blog-1" width={"80%"}/>
                    <img src="../blog-2.png" alt="blog-2" width={"80%"}/>
                    <img src="../blog-3.png" alt="blog-3" width={"80%"}/>
                </Grid>
            </Fade>
        </Layout>
    )
}
export default Blog