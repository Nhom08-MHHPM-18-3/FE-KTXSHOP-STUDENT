import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { userLogout } from '../../store/actions/cartActions';
import WishlistModal from '../Modals/WishlistModal';

class TopHeader extends Component {

    state = {
        WishlistModal: false
    };

    toggleModalWishlist = () => {
        this.setState({
            WishlistModal: !this.state.WishlistModal
        });
    }

    handleLogout = () => {
        // this.props.userLogout();
        Router.push('/');
    }

    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <ul className="header-contact-info">
                                    <li>Chào mừng đến với KTXShop</li>
                                    <li>Liên hệ: +084795895598</li>

                                    <li>

                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <ul className="header-top-menu">
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <i className='bx bxs-user'></i> Tài khoản
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#toggleModalWishlist">
                                            <a onClick={this.toggleModalWishlist}>
                                                <i className='bx bx-heart'></i> Yêu thích
                                            </a>
                                        </Link>
                                    </li>


                                    <li>
                                        {user ? (
                                            <Link href="#">
                                                <a onClick={e => { e.preventDefault(); this.handleLogout(); }}>
                                                    <i className='bx bx-log-in'></i> Đăng xuất
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href="/login">
                                                <a>
                                                    <i className='bx bx-log-in'></i> Đăng nhập
                                                </a>
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wishlist Modal */}
                <WishlistModal
                    onClick={this.toggleModalWishlist}
                    active={this.state.WishlistModal ? 'active' : ''}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // user: state.login
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userLogout: () => { dispatch(userLogout()) }
//     }
// }

export default (TopHeader);