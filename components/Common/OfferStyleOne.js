import React, { Component } from 'react';
import Link from 'next/link';

class OfferStyleOne extends Component {
    render() {
        return (
            <section className="offer-area bg-image1 ptb-100 jarallax">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="offer-content">
                                <span className="sub-title">Ưu đãi đặc biệt vào ngày 12/1</span>
                                <h2>Miễn phí toàn bộ phí vận chuyển</h2>

                                <Link href="">
                                    <a className="default-btn">Tìm kiếm sản phẩm</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferStyleOne;