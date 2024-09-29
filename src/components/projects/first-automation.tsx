import Link from 'antd/es/typography/Link'
import Grid from '../Grid'

function FirstAutomation() {
    return (
        <div>
            <h1>First Automation App</h1>

            <p>Alertas y Reportes personalizados del proceso industrial</p>
            <div>La implementación de una Plataforma IIoT (Industrial IoT) requiere alta inversión de capital (CAPEX) para la adquisición de equipos, software, programación del PLC y desarrollo de la plataforma, además de un extenso cronograma de factibilidad, licitación y ejecución del proyecto, que puede tardar hasta 12 meses.</div>

            <h3>Link:</h3>
            <Link href="https://first-automation.vercel.app/">https://first-automation.vercel.app/</Link>
            <Grid>
                <img src="/nube-industrial-home-page.png" width={'100%'} />
                <img src="/nube-industrial-login.png" width={'100%'} />
            </Grid>
        </div>
    )
}

export default FirstAutomation
