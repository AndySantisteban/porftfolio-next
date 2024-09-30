import Link from 'antd/es/typography/Link'
import Grid from '../Grid'
import { Helmet } from 'react-helmet-async'

function IglesiaNazareno() {
    return (
        <div>
            <Helmet>
                <title>Iglesia del Nazareno</title>
            </Helmet>
            <h1>Iglesia del Nazareno</h1>
            <div>Una pagina web para la iglesia del nazareno de Ferreñafe donde pueden acceder a bibliografìa, history y links de cultos.</div>
            <h3>Link:</h3>
            <Link href="https://iglesia-del-nazareno-ferrenafe.vercel.app/">https://iglesia-del-nazareno-ferrenafe.vercel.app/</Link>

            <Grid>
                <img src="https://media.licdn.com/dms/image/v2/C4E2DAQEKBMatJX0SJg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1677976541804?e=1728259200&v=beta&t=g9t5GrGobeo3fM-9GCO6wWXN0QMBH8KvAR8NRNgGGHU" width={'100%'} />
            </Grid>
        </div>
    )
}

export default IglesiaNazareno
