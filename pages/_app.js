import '../styles.scss';
import React from 'react';
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../store/reducers/cartReducer';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
// import { checkUserLogin, addProducts } from '../store/actions/cartActions';

const MyApp = ({ Component, pageProps}) => {
    // React.useEffect(() => {
    //     store.dispatch(checkUserLogin())
    //     store.dispatch(addProducts())
    // });
    return (
        <Layout>
            <ToastContainer />
            {/* <Provider store={store}> */}
                <Component {...pageProps} />
            {/* </Provider> */}
        </Layout>
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