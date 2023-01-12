import Head from 'next/head'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <Head>
            <title>Creato | Bite-sized learning experience curated by Creators</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default Header