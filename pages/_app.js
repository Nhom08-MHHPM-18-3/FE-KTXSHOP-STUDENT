import '../styles.scss';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import {CartProvider} from '../components/Cart/CartProvider';

const MyApp = ({ Component, pageProps }) => {

    return (
        <CartProvider>
            <Layout>
                <ToastContainer />
                <Component {...pageProps} />
            </Layout>
        </CartProvider>

    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
};


export default (MyApp)