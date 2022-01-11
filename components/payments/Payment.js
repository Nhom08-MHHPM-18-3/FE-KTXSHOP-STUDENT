import React from 'react';
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
const handleOrder = async (data) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    fetch(process.env.API_HOST + `/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: {
                AccountID: data.attributes.AccountID,
                Status: 'PROCESSING',
                CodeDiscount: '',
                ProductID: data.attributes.ProductID,
                Quantity: data.attributes.Quantity,
                UnitCost: data.attributes.UnitCost,
                Subtotal: data.attributes.Subtotal,
                PurchaseDate: today.toDateString(),

            }
        }),
    })
        .then(response => response.json())
        .then(data => {
        });
}

class Payments extends React.Component {
    handlePayment = async (cart, userData) => {
        const jwt = localStorage.getItem('jwt-ktxshop');
        fetch(process.env.API_HOST + `/api/accounts/${jwt}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    PhoneNumber: userData.phone.value,
                    FullName: userData.fullName.value,
                    Address: userData.address.value,
                }


            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        cart.cart.addedItems.map((item) => {
            cart.removeItem(item.id)
            handleOrder(item);
        })
        toast.success('Đặt hàng thành công', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setTimeout(this.home, 2000);

    };
    home = () => {
        Router.push('/')
    }
    render() {

        return (
            <React.Fragment>
                <div className="order-btn">
                    <button disabled={this.props.disabled} className={`default-btn`} onClick={() => this.handlePayment(this.props.userData, this.props.stateSchema)}>
                        Đặt hàng
                    </button>
                </div>
            </React.Fragment>
        );
    }
}


export default (Payments)