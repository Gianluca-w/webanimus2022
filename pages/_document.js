import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=10" />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
                    as="font"
                    crossOrigin=""
                    type="font/woff2"
                /></Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
