import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import ProductDetailsTab from './ProductDetailsTab';
import ProductImage from './ProductImage';

const hookClass = (props) => {
    const router = useRouter();
    return <ProductDetailsStyleOne {...props} router={router} />
}

class ProductDetailsStyleOne extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCart = (id, qty) => {
        console.log(id, qty);
        this.props.cart.addToCart(Number(id), qty);  

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    incrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    decreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        console.log(this.props);
        const offer = false;
        return (
            <section className="product-details-area pt-100 pb-70">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            {this.props.product.Image == undefined ? <ProductImage imageUrl={`${process.env.API_HOST}`} /> :<ProductImage imageUrl={`${process.env.API_HOST}${this.props.product.Image.data[0].attributes.url}`} />}
                            
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{this.props.product.ProductName}</h3>

                                <div className="price">
                                {
                                    offer ? (
                                        <React.Fragment>
                                            <span className="old-price">{Intl.NumberFormat().format(this.props.product.Price)}</span>
                                            <span className="new-price">{Intl.NumberFormat().format(this.props.product.Price)}</span>
                                        </React.Fragment>
                                    ) : (
                                        <span className="new-price">{Intl.NumberFormat().format(this.props.product.Price)}</span>
                                    )
                                }
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>

                                    {/* <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="rating-count">3 reviews</a>
                                    </Link> */}
                                </div>

                                <ul className="products-info">
                                    <li>
                                        <span>Số lượng hàng còn: </span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>{this.props.product.Quantity}</a>
                                        </Link>
                                    </li>
                                </ul>


                                <div className="products-info-btn">

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#productsShippingModal">
                                            <i className='bx bxs-truck'></i> 
                                            Shipping
                                        </a>
                                    </Link>

                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <span 
                                            className="minus-btn"
                                            onClick={this.decreaseItem}
                                        >
                                            <i className='bx bx-minus'></i>
                                        </span>

                                        <input 
                                            type="text" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max}
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />

                                        <span 
                                            className="plus-btn"
                                            onClick={this.incrementItem}
                                        >
                                            <i className='bx bx-plus'></i>
                                        </span>
                                    </div>

                                    <button 
                                        className="default-btn"
                                        onClick={()=>this.handleAddToCart(this.props.id, this.state.qty)}
                                    >
                                        <i className="fas fa-cart-plus"></i> 
                                        Thêm vào giỏ
                                    </button>
                                </div>


                                <div className="buy-checkbox-btn">
                                    
                                    <div className="item">
                                        <Link href="/checkout">
                                            <a onClick={()=>this.handleAddToCart(this.props.id, this.state.qty)} className="default-btn">Thanh toán ngay</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Tab */}
                    <ProductDetailsTab product={this.props.product} />
                </div>

            </section>
        );
    }
}


export default (hookClass);