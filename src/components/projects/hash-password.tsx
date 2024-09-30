import Link from 'antd/es/typography/Link'
// import React from 'react'
import Grid from '../Grid'
import { Helmet } from 'react-helmet-async'

function HassPassword() {
    return (
        <div>
            <Helmet>
                <title>Hash Password</title>
            </Helmet>
            <h1> Hash Password</h1>
            <div>Encripta tu contraseña con MD5</div>

            <h3>Link:</h3>
            <Link href="https://hashpassword.vercel.app/">https://hashpassword.vercel.app/</Link>
            <Grid>
                <img src="https://media.licdn.com/dms/image/v2/C4D2DAQGBEryFICusvw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1670263393084?e=1728255600&v=beta&t=CANCSbBLX_ILppmClpXyJNT-vwIAL3o0eqIV5D45MqA" width={'100%'} />
            </Grid>
        </div>
    )
}

export default HassPassword
