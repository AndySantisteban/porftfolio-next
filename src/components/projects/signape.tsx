import Link from 'antd/es/typography/Link'
import Grid from '../Grid'

function Signape() {
    return (
        <div>
            <h1>Signape</h1>
            <div>
                🔬 Aplicación de videollamadas con traducción de lenguaje de señas peruano (Abecedario)
                <br />
                <br />
                En colaboración con Nicolette Isis Pacheco Contreras
                <br />
                <br />
                <Link href="https://signape.onrender.com/">https://signape.onrender.com/</Link>
                <br />
                <Grid>
                    <img src="/signape-homepage.png" alt="" width={'80%'} />
                    <iframe height={'600px'} src="https://media.licdn.com/dms/document/media/D4E1FAQHHIr4dkl67IQ/feedshare-document-pdf-analyzed/0/1711724288117?e=1728518400&v=beta&t=ZI0P0pSpvxT3simkhJSQd1naMTVrdIKru25rGSw8u5M" />
                </Grid>
            </div>
        </div>
    )
}

export default Signape
