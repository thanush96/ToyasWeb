import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const productData = [
    {
        id: 1,
        title: 'Product 1',
        price: '$70',
        status: 'hot',
        discount: null,
        image: '/static/img/categories/images/d1.png',
    },
    {
        id: 2,
        title: 'Product 2',
        price: '$2300',
        status: null,
        discount: null,
        image: '/static/img/categories/images/d2.png',
    },
    {
        id: 3,
        title: 'Product 3',
        price: '$360',
        status: null,
        // discount: '19% OFF',
        image: '/static/img/categories/images/d3.png',
    },
    {
        id: 4,
        title: 'Product 4',
        price: '$80',
        image: '/static/img/categories/images/d4.png',
    },
    {
        id: 5,
        title: 'Product 5',
        price: '$1200',
        status: null,
        discount: null,
        image: '/static/img/categories/images/d5.png',
    },
    {
        id: 6,
        title: 'Product 6',
        price: '$800',
        status: 'sale',
        // discount: '25% OFF',
        image: '/static/img/categories/images/d6.png',
    },
    {
        id: 4,
        title: 'Product 4',
        price: '$80',
        image: '/static/img/categories/images/d4.png',
    },
    {
        id: 5,
        title: 'Product 5',
        price: '$1200',
        status: 'hot',
        discount: null,
        image: '/static/img/categories/images/d5.png',
    },
];

const NewArrivals = () => {
    return (
        <div className="ps-product-list ps-new-arrivals">
            <div className="ps-container">
                <div className="row">
                    {/* Discount Banner Section */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 discount-banner">
                        <div className="discount-content">
                            <div className="top">
                                <h3>Toys Lorem Ipsum</h3>
                                <h2>32% Discount</h2>
                                <p>For all Toys Products</p>
                                <p>Offers ends in:</p>
                                <p>ENDS OF CHRISTMAS</p>
                                <button className="shop-now-btn">
                                    SHOP NOW
                                </button>
                            </div>

                            <img
                                src={'/static/img/categories/images/d3.png'}
                                alt=""
                            />
                        </div>
                    </div>
                    {/* New Arrivals Section */}
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-6 col-12">
                        <div className="ps-section__header">
                            <h3>New Products</h3>
                            <ul className="ps-section__links">
                                <li>
                                    <Link href="/shop">
                                        <a>All Product</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Teddies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Carts</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Blocks</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop?category=health-and-beauty">
                                        <a>Ball</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Browse All Product →</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <div className="row">
                                {productData.map((item) => (
                                    <div
                                        className="product-item col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12"
                                        key={item.id}>
                                        <div className="product-image">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            {item.status && (
                                                <span
                                                    className={`status ${item.status}`}>
                                                    {item.status}
                                                </span>
                                            )}
                                            {item.discount && (
                                                <span className="discount">
                                                    {item.discount}
                                                </span>
                                            )}

                                            <div className="product-info">
                                                <Rating /> (100)
                                                <p className="product-title">
                                                    {item.title}
                                                </p>
                                                <p className="product-price">
                                                    {item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
