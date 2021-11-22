import Layout from "../../components/Layout";
import Return from "../../components/Return";
import IconStack from "../../components/IconStack";
import Grid from "../../components/Grid";
import Fade from 'react-reveal/Fade';

const Jwt = () => {
    return (
        <Layout>
            <Fade>
            <Return/>
            <h1>Json Web Token Template</h1>
            <hr/>
            <p>
                Library that facilitates the use of jwt using reusable functions from Frontend with React.js<br/>
            </p>
            <p>
                <b>Usage:</b>
            </p>
            <pre>{`
    const useJwt = require 
    ('jsonwebtoken-template')
    # Define Object
    const user = {
       name : "Andy",
       password: "Santisteban"
    }
    # Define time expired
    const expired={
        time:"1h"
    }
    # Define word secret
    const varEnv="secret"
    
    # Create Token
    const toker = 
    useJwt.signJwt
        (user,
        expired,
        varEnv)
    
    console.log(toker)
    
    # Decodificed Token
    const decoded = 
    useJwt.verifyJwt(toker,varEnv)
    
    console.log(decoded)
            `}</pre>

            <p>
                Visit: <a href="https://www.npmjs.com/package/jsonwebtoken-template" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/ jsonwebtoken-template</a>
            </p>
            <p>Stack:</p>
            <div>
                <IconStack src={"https://img.icons8.com/color/30/000000/java-web-token.png"} props={"JWT"}/>
                <IconStack src={"https://img.icons8.com/color/30/000000/nodejs.png"} props={"Node.js"}/>
                <IconStack src={"https://img.icons8.com/color/30/000000/npm.png"} props={"NPM"}/>
                <IconStack src={"https://img.icons8.com/color/30/000000/javascript.png"} props={"Javascript"}/>
            </div>
            <p>
                <b>Project preview:</b>
            </p>
            <Grid>
                <img src="../jwt-1.png" alt="jwt-template1" width={"80%"}/>
                <img src="../jwt-2.png" alt="jwt-template2" width={"80%"}/>
                <img src="../jwt-3.png" alt="jwt-template3" width={"80%"}/>
                <img src="../jwt-4.png" alt="jwt-template4" width={"80%"}/>

            </Grid>
            </Fade>
        </Layout>
    )
}
export default Jwt;