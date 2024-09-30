import { Helmet } from 'react-helmet-async'
import Grid from '../Grid'
import Link from 'antd/es/typography/Link'

function TrackingSeller() {
    return (
        <div>
            <Helmet>
                <title>Tracking SelleR</title>
            </Helmet>
            <h1>Tracking SelleR</h1>
            <div>Tracking SelleR - Desarrollado por equipo de desarrollo MDP y IT Data</div>
            <h3>Link:</h3>
            <Link href="https://appseller.ripley.com.pe/login">https://appseller.ripley.com.pe/login</Link>
            <Grid>
                <img src="https://media.licdn.com/dms/image/v2/C4D2DAQEDw3y68Kin6g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1670262280699?e=1728255600&v=beta&t=pL9QpeMT7QPwqMdwr-BKU4WsLDBgFCFktuC8-4zEKbo" width={'100%'} />
                <img src="https://media.licdn.com/dms/image/v2/C4E2DAQEcPwJgLnXYsQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1670212514987?e=1728255600&v=beta&t=9c2eCY7UhMsRgwr_sg4K-98_kK4Vi-m-xNYcI1ACWx4" width={'100%'} />
            </Grid>
        </div>
    )
}

export default TrackingSeller
