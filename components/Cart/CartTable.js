import React, { Component } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';


class CartTable extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        console.log(this.props.cart.cart.addedItems);
        return (
            <section className="cart-area ptb-100">
                <div className="container">
                    <form>
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng cộng</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.props.cart.cart.addedItems.length ?
                                        (
                                            this.props.cart.cart.addedItems.map((data, idx) => {
                                                return (
                                                    <tr key={idx}>
                                                        <td className="product-thumbnail">
                                                            <Link href={`/product?id=${data.id}`}>
                                                                <a >
                                                                    <img src={`${data.product.attributes.imageUrl}`} alt="item" />
                                                                </a>
                                                            </Link>
                                                        </td>

                                                        <td className="product-name">
                                                            <Link href={`/product?id=${data.product.id}`}>
                                                                <a >
                                                                    {data.product.attributes.ProductName}
                                                                </a>
                                                            </Link>
                                                        </td>

                                                        <td className="product-price">
                                                            <span className="unit-amount">{Intl.NumberFormat().format(data.attributes.UnitCost)} đ</span>
                                                        </td>

                                                        <td className="product-quantity">
                                                            <span className="unit-amount">{data.attributes.Quantity}</span>
                                                            {/* <div className="input-counter">
                                                                <span
                                                                    className="minus-btn"
                                                                    onClick={() => { this.props.cart.subQuantity(data.id) }}
                                                                >
                                                                    <i className='bx bx-minus'></i>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    value={data.quantity}
                                                                    min="1"
                                                                    max={10}
                                                                    readOnly={true}
                                                                    onChange={e => (e)}
                                                                />
                                                                <span
                                                                    className="plus-btn"
                                                                    onClick={() => { this.props.cart.addQuantity(data.id) }}
                                                                >
                                                                    <i className='bx bx-plus'></i>
                                                                </span>
                                                            </div> */}
                                                        </td>

                                                        <td className="product-subtotal">
                                                            <span className="subtotal-amount">{Intl.NumberFormat().format(data.attributes.Subtotal)} đ</span>

                                                            <Link href="#">
                                                                <a className="remove" onClick={(e) => { e.preventDefault(); this.props.cart.removeItem(data.id) }}>
                                                                    <i className='bx bx-trash'></i>
                                                                </a>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td className="product-thumbnail" colSpan="6">
                                                    <p>Empty.</p>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-buttons">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <Link href="/">
                                        <a className="optional-btn">Tiếp tục mua sắm</a>
                                    </Link>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="cart-totals">
                                        <h3>Tổng số giỏ hàng</h3>

                                        <ul>
                                            <li>Tổng tiền<span>{Intl.NumberFormat().format(this.props.cart.cart.total)} đ</span></li>
                                        </ul>

                                        <Link href="/checkout">
                                            <a className="default-btn">Thanh toán</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}


export default (CartTable)