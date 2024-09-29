import Link from 'antd/es/typography/Link'
import React from 'react'
import Grid from '../Grid'

function HassPassword() {
    return (
        <div>
            <h1> Hash Password</h1>
            <div>Encripta tu contraseña con MD5</div>

            <h3>Link:</h3>
            <Link href="https://hashpassword.vercel.app/">https://hashpassword.vercel.app/</Link>
            <Grid>
                <img src="/hashpass.png" width={'100%'} />
            </Grid>
        </div>
    )
}

export default HassPassword
