import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Payment from '../payments/Payment';
class CheckoutForm extends Component {
    handleEmptyForm = () => {
        toast.error('Vui lòng điền đầy đủ thông tin', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    
    render() {
        let { disabled,stateData } = this.props;
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Đơn hàng của bạn</h3>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng giá</th>
                                </tr>
                            </thead>

                            <tbody>
                                {stateData.cart.addedItems.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <a href="#">{data.product.attributes.ProductName}</a>
                                        </td>
                                        <td className="product-total">
                                            <span className="subtotal-amount">{data.attributes.Quantity}</span>
                                        </td>
                                        <td className="product-total">
                                            <span className="subtotal-amount">{Intl.NumberFormat().format(data.attributes.Subtotal)} đ</span>
                                        </td>
                                    </tr>
                                ))}
                                
                                <tr>
                                    <td className="order-subtotal">
                                        <span>Tổng tiền giỏ hàng</span>
                                    </td>
                                    <td></td>
                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">{Intl.NumberFormat().format(stateData.cart.total)} đ</span>
                                    </td>
                                </tr>

                                {/* <tr>
                                    <td className="order-shipping">
                                        <span>Shipping</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>$30</span>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className="total-price">
                                        <span>Tổng tiền phải thanh toán</span>
                                    </td>
                                    <td></td>
                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">{Intl.NumberFormat().format(stateData.cart.total)} đ</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-box">
                        <div className="payment-method">
                            <p>
                                <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                <label>Thanh toán khi nhận hàng</label>
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
                                    >Vui lòng điền đầy đủ thông tin</a>
                                </Link>
                            ) : (
                                <Payment 
                                    userData={this.props.stateData}
                                    disabled={disabled}
                                    stateSchema={this.props.stateSchema}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}



export default (CheckoutForm)