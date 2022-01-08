import React, { Component } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
// import { removeItem } from '../../store/actions/cartActions';

class ShoppingCartModal extends Component {

    state = {
        modal: false
    };

    handleRemove = (id) => {
        // this.props.removeItem(id);
        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    
    
    render() {
        let cartItems = 1=== 2 ? 
        (
            this.props.products.map((product, idx) => {
                return(
                    <div className="products-cart-content" key={idx}>
                        <div className="products-cart">
                            <div className="products-image">
                                <Link href="#">
                                    <a>
                                        <img src={product.imageUrl} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="products-content">
                                <h3>
                                    <Link href="#">
                                        <a>{product.title}</a>
                                    </Link>
                                </h3>

                                <div className="products-price">
                                    <span>{product.quantity}</span>
                                    <span>x</span>
                                    <span className="price">${product.newPrice}</span>
                                </div>

                                <Link href="#">
                                    <a 
                                        className="remove-btn"
                                        onClick={(e)=>{e.preventDefault();this.handleRemove(product.id)}}
                                    >
                                        <i className='bx bx-trash'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="products-cart-content">
                <p>Giỏ hàng trống.</p>
            </div>
        )
        return (
            <React.Fragment>
                <div className={`shoppingCartModal right ${this.props.active}`}> 
                    <div className="modal-innter-content">
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">
                                <i className='bx bx-x'></i>
                            </span>
                        </button>

                        <div className="modal-body">
                            <h3>Giỏ hàng của tôi (2)</h3>

                            {cartItems}

                            <div className="products-cart-subtotal">
                                <span>Tổng tiền</span>
                                <span className="subtotal">${this.props.total}</span>
                            </div>

                            <div className="products-cart-btn">
                                <Link href="/checkout">
                                    <a className="default-btn">Tiến hành thanh toán</a>
                                </Link>
                                
                                <Link href="/cart">
                                    <a className="optional-btn">Xem giỏ hàng</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // products: state.addedItems,
        // total: state.total
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (id) => {dispatch(removeItem(id))}
//     }
// }

export default(ShoppingCartModal)