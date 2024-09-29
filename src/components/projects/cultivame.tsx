import Link from 'antd/es/typography/Link'
import Grid from '../Grid'

function Cultivame() {
    return (
        <div>
            <h1>CultivaMe</h1>
            <div>
                🌾 CultivaMe (BETA)
                <br />
                🔬 Aplicación de monitoreo de cultivos agrícolas con Deep Learning
                <br />
                <Link href="https://cultivame-web.vercel.app/">https://cultivame-web.vercel.app/</Link>
                <br />
                <Grid>
                    <img src="/cultivame.png" alt="" width={'100%'} />
                    <iframe width={'100%'} height={'400px'} src="https://media.licdn.com/dms/document/media/D4E1FAQHHIr4dkl67IQ/feedshare-document-pdf-analyzed/0/1711724288117?e=1728518400&v=beta&t=ZI0P0pSpvxT3simkhJSQd1naMTVrdIKru25rGSw8u5M" />
                </Grid>
            </div>
        </div>
    )
}

export default Cultivame
