import React, { Component } from 'react';
import QuickViewModal from '../Modals/QuickViewModal';
import { ToastContainer, toast } from 'react-toastify';
import SingleProduct from '../Common/SingleProduct';

class BestSellingProducts extends Component {
    
    state = {
        QuickViewModal: false,
        modalProduct: {},
        products: []
    };

    componentDidMount(){
        this.setState({
            products: this.props.products
        })
    }

    toggleModal = () => {
        this.setState({
            QuickViewModal: !this.state.QuickViewModal
        });
    }

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    passDataToModal = (product) => {
        this.setState({
            modalProduct: product
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="products-area pb-70">
                    <ToastContainer />
                    <div className="container">
                        <div className="section-title">
                            <h2>Sản phẩm hot</h2>
                        </div>

                        <div className="row">
                            {!!this.state.products.length && this.state.products.map((product, idx) => (
                                <SingleProduct 
                                    styleCls="col-lg-4 col-sm-6"
                                    styleClsTwo="products-box"
                                    product={product.attributes}
                                    id={product.id}
                                    key={idx}
                                    onHandleAddToCart={this.handleAddToCart}
                                    onhandleModalProduct={this.passDataToModal}
                                    ontoggleModal={this.toggleModal}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick View Modal */}
                <QuickViewModal
                    onClick={this.toggleModal} active={this.state.QuickViewModal ? 'active' : ''}
                    product={this.state.modalProduct}
                />
            </React.Fragment>
        );
    }
}


export default (BestSellingProducts);