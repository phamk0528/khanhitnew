import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';



export default class Document extends NextDocument {
    static getInitialProps(ctx: DocumentContext) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
