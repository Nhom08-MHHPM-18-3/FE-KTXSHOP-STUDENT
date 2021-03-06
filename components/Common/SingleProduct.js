import React, { Component } from 'react';
import Link from 'next/link';

class SingleProduct extends Component {
    state = {
        QuickViewModal: false
    }

    toggleModal = () => {
        this.setState({
            QuickViewModal: !this.state.QuickViewModal
        });
        this.props.ontoggleModal(this.state.QuickViewModal);
    }

    handleModalProduct = (product) => {
        this.props.onhandleModalProduct(product);
    }
    render() {
       
        let { product, styleCls, styleClsTwo, onHandleAddToCart, id } = this.props;
        return (
            <div className={styleCls}>
                <div className={styleClsTwo || "single-products-box"}>
                    <div className="products-image">
                        <Link href={`/product/${id}`}>
                            <a>
                                <img src={`${product.imageUrl}`} className="main-image" alt="image" />
                                <img src={`${product.imageUrl}`} className="hover-image" alt="image" />
                            </a>
                        </Link>

                        <div className="products-button">
                            <ul>

                                {/* <li>
                                    <div className="quick-view-btn">
                                        <Link href={`/product?id=${product.id}`}>
                                            <a 
                                                onClick={ e => {
                                                    e.preventDefault();
                                                    this.toggleModal();
                                                    this.handleModalProduct(product);
                                                }}
                                            >
                                                <i className='bx bx-search-alt'></i>
                                                <span className="tooltip-label">Xem nhanh</span>
                                            </a>
                                        </Link>
                                    </div>
                                </li> */}
                            </ul>
                        </div>

                        {
                            product.onSale ? (
                                <div className="sale-tag">Sale!</div>
                            ) : null
                        }

                        {
                            product.newProduct ? (
                                <div className="new-tag">New!</div>
                            ) : null
                        }

                    </div>

                    <div className="products-content">
                        <h3><Link href={`/product/${id}`}><a>{product.ProductName}</a></Link></h3>
                        <div className="price">
                            {
                                product.offer ? (
                                    <React.Fragment>
                                        <span className="old-price">{product.oldPrice} ??</span>
                                        <span className="new-price">{product.Price} ??</span>
                                    </React.Fragment>
                                ) : (
                                    <span className="new-price">{Intl.NumberFormat().format(product.Price)} ??</span>
                                )
                            }
                        </div>
                        <div className="star-rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        <a
                            className="add-to-cart"
                            onClick={(e) => {
                                e.preventDefault(); onHandleAddToCart(id,1);
                            }}
                        >
                            Th??m v??o gi???
                        </a>
                    </div>
                    {product.discount ? (
                        <span className="products-discount">
                            <span>
                                Gi???m{product.discountOff}%
                            </span>
                        </span>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default SingleProduct;