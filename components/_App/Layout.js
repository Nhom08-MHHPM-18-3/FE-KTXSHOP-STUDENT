import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>KTXShop</title>
                <meta name="description" content="Nơi buôn bán những mặt hàng cần thiết" />
                <meta name="og:title" property="og:title" content="KTXShop"></meta>
                <meta name="twitter:card" content="KTXShop"></meta>
                <link rel="canonical" href="https://livani-react.envytheme.com/"></link>
                <meta property="og:image" content="https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg" />
            </Head>
            {loader ? 'Loading' : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;