import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Payment from '../payments/Payment';
const data = [
    {
        description: "Long Sleeve Leopard T-Shirt",
        discount: false,
        discountOff: 10,
        id: "5DAcUDDd4t8xWgl9kvXl",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
        newPrice: 320,
        newProduct: false,
        offer: true,
        oldPrice: 250,
        onSale: false,
        title: "Long Sleeve Leopard T-Shirt",
        type: "T-Shirt"
    },
    {
        description: "Sunnyme Women's Ponchos",
        discount: false,
        discountOff: 0,
        id: "81tgigL0U2zUHoTj85Ht",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Sunnyme Women's Ponchos",
        type: "Women Clothes"
    },
    {
        description: "Women's Modern-Skinny",
        discount: true,
        discountOff: 20,
        id: "9Gkmfo4HjW4tKvMYlpX9",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover12-1588705972392.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img12-1588705966818.jpg",
        newPrice: 100,
        newProduct: false,
        offer: true,
        oldPrice: 150,
        onSale: false,
        title: "Women's Modern-Skinny",
        type: "T-Shirt"
    },
    {
        description: "Block Striped Draped",
        discount: false,
        discountOff: 0,
        id: "D9wwa2ZDu281HV5s95b9",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover11-1588705905171.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img11-1588705899677.jpg",
        newPrice: 210,
        newProduct: false,
        offer: false,
        oldPrice: 220,
        onSale: false,
        title: "Block Striped Draped",
        type: "T-Shirt"
    },
]
class CheckoutForm extends Component {
    handleEmptyForm = () => {
        toast.error('Please fillup the form carefully', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        let totalAmount = (this.props.total + this.props.shipping).toFixed(2)
        let { disabled } = this.props;
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <a href="#">{data.title}</a>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">${data.newPrice * data.quantity}</span>
                                        </td>
                                    </tr>
                                ))}
                                
                                <tr>
                                    <td className="order-subtotal">
                                        <span>Cart Subtotal</span>
                                    </td>

                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">${this.props.total}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="order-shipping">
                                        <span>Shipping</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>$30</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">${totalAmount}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-box">
                        <div className="payment-method">
                            <p>
                                <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                <label>Direct Order</label>
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>

                        {
                            disabled ? (
                                <Link href="#">
                                    <a 
                                        className={disabled ? 'default-btn disabled-btn' : 'default-btn'}
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleEmptyForm();
                                        }}
                                    >Place Order</a>
                                </Link>
                            ) : (
                                <Payment 
                                    amount={totalAmount * 100}
                                    userData={this.props.stateData}
                                    disabled={disabled}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

export default (CheckoutForm)