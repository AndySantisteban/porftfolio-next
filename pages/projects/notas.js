import Layout from "../../components/Layout";
import Return from "../../components/Return";
import Fade from "react-reveal/Fade";
import IconStack from "../../components/IconStack";
import Grid from "../../components/Grid";

const Notas = () => {
  return (
      <Layout>
          <Return/>
          <Fade>
              <h1>Notes</h1>
              <hr/>
              <p>
                  This project is a list of notes created with Firebase to be able to store data, inside the firestore, taking advantage of the library and the benefits provided by Redux and react redux.
              </p>

              <p>
                  Visit: <a href="https://blog-de-notas.vercel.app/" target="_blank" rel="noopener noreferrer">https://blog-de-notas.vercel.app</a>
              </p>
              <p>Stack:</p>
              <div>
                  <IconStack src={"https://img.icons8.com/color/30/000000/firebase.png"} props={"Firebase"}/>
                  <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
                  <IconStack src={"https://img.icons8.com/color/30/000000/react-native.png"} props={"React"}/>
              </div>
              <p>
                  <b>Project preview:</b>
              </p>
              <Grid>
                  <img src="../notas.png" alt="notas" width={"80%"}/>
                  <img src="../nota-1.png" alt="nota-1" width={"80%"}/>
                  <img src="../nota-3.png" alt="nota-3" width={"80%"}/>
              </Grid>
          </Fade>
      </Layout>
  )
}
export default Notas;
