import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 500,
    items: 1,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class MainBanner extends Component {
    _isMounted = false;
    state = {
        display: false,
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        return (
            <React.Fragment>
                {this.state.display ? <OwlCarousel 
                    className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner banner-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                   Giá cả ưu đãi
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Rẻ hơn 10% so với giá thị trường
                                                </p>

                                                <div className="btn-box">
                                                    
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Đảm bảo chất lượng
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Rõ ràng nguồn gốc xuất xứ
                                                </p>
                                                
                                                
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Tiện lợi và nhanh chóng
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Giao hàng trong vòng 2 giờ
                                                </p>
                                                
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default MainBanner;
