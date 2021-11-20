import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>AndySantisteban</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/yo2_1.png" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument