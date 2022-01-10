import '../styles.scss';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import { CartProvider } from '../components/Cart/CartProvider';
import { UserProvider } from '../contexts/UserContext';
const MyApp = ({ Component, pageProps }) => {

    return (
        <UserProvider>
            <CartProvider>
                <Layout>
                    <ToastContainer />
                    <Component {...pageProps} />
                </Layout>
            </CartProvider>
        </UserProvider>
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