import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />

            </Head>
            <body>

                <div id="splashScreen" style={{
                    backgroundColor:'#0B0A0B',
                    height: '100vh',
                    width: '100%',
                    position:'absolute',
                    transition:'1s',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <svg width="229" height="233" viewBox="0 0 229 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M138.24 144.812L113.442 67.6656L89.2944 144.812H138.24ZM229 233H166.084L151.918 188.719H75.3889L61.0113 233H0L69.1201 33.6945C72.3115 24.2952 76.6536 17.0315 82.1463 11.9036C90.7562 3.94994 102.141 -0.322648 113.865 -6.60829e-05C135.575 -6.60829e-05 150.425 11.3453 158.414 34.036L229 233Z" fill="white" />
                    </svg>

                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
