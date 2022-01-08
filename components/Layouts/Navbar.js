import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import SearchModal from '../Modals/SearchModal';
import ShoppingCartModal from '../Modals/ShoppingCartModal';
import SidebarModal from '../Modals/SidebarModal';
import CartContext from '../../contexts/CartContext';
class Navbar extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    // Search Modal
    toggleModalSearch = () => {
        this.setState({
            SearchModal: !this.state.SearchModal
        });
    }

    // Shopping Cart Modal
    toggleModalCart = () => {
        this.setState({
            ShoppingCartModal: !this.state.ShoppingCartModal
        });
    }

    // Sidebar Modal
    toggleModalSidebar = () => {
        this.setState({
            SidebarModal: !this.state.SidebarModal
        });
    }

    render() {

        const { products } = this.props;
        const { collapsed } = this.state;
        const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src={require("../../images/logo.png")} alt="logo" />
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classNameTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classNameOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        </li>
                                    </ul>

                                    <div className="others-option">
                                        <div className="option-item">
                                            <div className="search-btn-box" onClick={this.toggleModalSearch}>
                                                <i className="search-btn bx bx-search-alt"></i>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <div className="cart-btn">
                                                <Link href="#toggleModalCart">
                                                    <a onClick={e => {
                                                        e.preventDefault();
                                                        this.toggleModalCart();
                                                    }}>
                                                        <i className='bx bx-shopping-bag'></i>
                                                        <CartContext.Consumer >
                                                            {({ cart }) => (
                                                                <span>{cart.addedItems.length}</span>
                                                            )}
                                                        </CartContext.Consumer>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Search Modal */}
                <SearchModal
                    onClick={this.toggleModalSearch}
                    active={this.state.SearchModal ? 'active' : ''}
                />

                {/* Shopping Cart Modal */}
                <CartContext.Consumer >
                    {({ cart, removeItem }) => (
                        <ShoppingCartModal
                            onClick={this.toggleModalCart}
                            active={this.state.ShoppingCartModal ? 'active' : ''}
                            products={cart.addedItems}
                            handleRemove={removeItem}
                            total={cart.total}
                        />
                    )}
                </CartContext.Consumer>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // products: state.addedItems
    }
}

export default (Navbar);