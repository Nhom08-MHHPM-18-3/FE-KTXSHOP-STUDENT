import React, { Component } from 'react';
import Link from 'next/link';

class ProductDetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="tab products-details-tab">
                <ul className="tabs">
                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                        className="current"
                    >
                        <a href="#">
                            <div className="dot"></div> Mô tả
                        </a>
                    </li>
                    
                    {/* <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}
                    >
                        <a href="#">
                            <div className="dot"></div> Thông tin thêm
                        </a>
                    </li>

                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}
                    >
                        <a href="#">
                            <div className="dot"></div> Đánh giá
                        </a>
                    </li> */}
                </ul>

                <div className="tab-content">
                    <div id="tab1" className="tabs-item">
                        <div className="products-details-tab-content">
                            <p>{this.props.product.Desciption}</p>

                        </div>
                    </div>

                    <div id="tab2" className="tabs-item">
                        <div className="products-details-tab-content">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Color:</td>
                                            <td>Blue, Purple, White</td>
                                        </tr>
                                        <tr>
                                            <td>Size:</td>
                                            <td>20, 24</td>
                                        </tr>
                                        <tr>
                                            <td>Material:</td>
                                            <td>100% Polyester</td>
                                        </tr>
                                        <tr>
                                            <td>Height:</td>
                                            <td>180 cm - 5' 11”</td>
                                        </tr>
                                        <tr>
                                            <td>Bust:</td>
                                            <td>83 cm - 32”</td>
                                        </tr>
                                        <tr>
                                            <td>Waist:</td>
                                            <td>57 cm - 22”</td>
                                        </tr>
                                        <tr>
                                            <td>Hips:</td>
                                            <td>88 cm - 35</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping:</td>
                                            <td>Free</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                        <div className="products-details-tab-content">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>This item Ship to USA</td>
                                        </tr>

                                        <tr>
                                            <td>Delivery</td>
                                            <td>
                                                Estimated between Wednesday 07/31/2020 and Monday 08/05/2020 <br />
                                                Will usually ship within 1 bussiness day.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="tab4" className="tabs-item">
                        <div className="products-details-tab-content">
                            <p>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của Shopee là một social E-commerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog - trang blog thông tin chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.

Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên Shopee để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.</p>

                        </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                        <div className="products-details-tab-content">
                            <div className="products-review-form">
                                <h3>Customer Reviews</h3>

                                <div className="review-title">
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                    <p>Based on 3 reviews</p>

                                    <Link href="#">
                                        <a className="default-btn">Write a Review</a>
                                    </Link>
                                </div>

                                <div className="review-comments">
                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>

                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>

                                    <div className="review-item">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <h3>Good</h3>
                                        <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                </div>

                                <div className="review-form">
                                    <h3>Write a Review</h3>

                                    <form onSubmit={e => e.preventDefault()}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="review-body" id="review-body" cols="30" rows="6" placeholder="Write your comments here" className="form-control"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">Submit Review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailsTab;