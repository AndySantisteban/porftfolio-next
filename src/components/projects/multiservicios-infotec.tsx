import Link from 'antd/es/typography/Link'
import Grid from '../Grid'
import { Helmet } from 'react-helmet-async'

function MultiserviciosInfotec() {
    return (
        <div>
            <Helmet>
                <title>Multiservicios Infotec</title>
            </Helmet>
            <h1>Multiservicios Infotec</h1>
            <div>"Ventas de equipos de Computo (PCs, portátiles, etc.), Impresoras, Suministros, Accesorios (Mouse, teclados, auriculares, webcam, etc.), Celulares (Samsung, Huawei, Xiaomi, LG, etc.), Accesorios (Cargadores, audifonos, Memorias SD, etc.) y Serv. Tecnico. además de accesorios de Computo y celulares (audífonos, mouse, parlantes, teclados, etc.) Servicio Técnico Especializado.</div>
            <h3>Link:</h3>
            <Link href="https://multiservicios-infotec.vercel.app/">https://multiservicios-infotec.vercel.app/</Link>
            <Grid>
                <img src="/infotec-homepage.png" alt="" width={'100%'} />
            </Grid>
        </div>
    )
}

export default MultiserviciosInfotec
