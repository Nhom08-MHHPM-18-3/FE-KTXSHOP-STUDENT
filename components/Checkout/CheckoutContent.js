import React from 'react';
import useForm from './userForm';
import OrderSummary from './OrderSummary';

const CheckoutContent = ({ cart }) => {
    function handleSubmit() {
        console.log("Form submitted.");
    }


    const stateSchema = {
        fullName: { value: "", error: "" },
        address: { value: "", error: "" },
        wards: { value: "", error: "" },
        district: { value: "", error: "" },
        city: { value: "", error: "" },
        phone: { value: "", error: "" }
    };

    const validationStateSchema = {
        fullName: {
            required: true,
            validator: {
                error: "Vui lòng điền họ tên"
            }
        },

        address: {
            required: true,
            validator: {
                error: "Vui lòng điền địa chỉ"
            }
        },
        wards: {
            required: true,
            validator: {
                error: "Vui lòng nhập xã/ phường"
            }
        },
        district: {
            required: true,
            validator: {
                error: "Vui lòng nhập quận/ huyện"
            }
        },
        city: {
            required: true,
            validator: {
                error: "Vui lòng nhập tỉnh/ thành phố"
            }
        },


        // email: {
        //     required: true,
        //     validator: {
        //         regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //         error: "Invalid email format."
        //     }
        // },

        phone: {
            required: true,
            validator: {
                regEx: /^[0-9]?()[0-9](\s|\S)(\d[0-9]{8})$/,
                error: "Số điện thoại hợp lệ như 07999999999."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm(
        stateSchema,
        validationStateSchema,
        handleSubmit
    );

    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    return (
        <section className="checkout-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="icofont-ui-file"></i>
                            <span>Chúng tôi chỉ nhận đơn hàng với địa chỉ trong làng đại học!<a href="#"></a></span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Thông tin cá nhân</h3>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Họ và tên<span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="form-control"
                                                placeholder="Ex: Nguyễn Văn A"
                                                onChange={handleOnChange}
                                                value={state.fullName.value}
                                            />
                                            {state.fullName.error && <p style={errorStyle}>{state.fullName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Số nhà/ đường/ tòa / khu kí túc xá<span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                placeholder="Ex: tòa D5 KTX khu B"
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Xã/ Phường<span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="wards"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                placeholder="Ex: Linh Trung"
                                                value={state.wards.value}
                                            />
                                            {state.wards.error && <p style={errorStyle}>{state.wards.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Quận/Huyện<span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="district"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                placeholder="Ex: Dĩ An"
                                                value={state.district.value}
                                            />
                                            {state.district.error && <p style={errorStyle}>{state.district.error}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Tỉnh/Thành phố<span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                placeholder="Ex: Bình Dương"
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Số điện thoại <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                placeholder="Ex: 0799999999"
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Ghi chú với đơn hàng" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrderSummary disabled={disable} stateData={cart} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutContent;