import Head from 'next/head'
function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>AndySantisteban</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/yo2_1.png"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter"
                    rel="stylesheet preload"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
