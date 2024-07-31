import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount } from '~/utilities/ecomerce-helpers';
import '@fortawesome/fontawesome-free/css/all.css';

const ModulePaymentOrderSummary = ({ ecomerce, shipping }) => {
    const { products, getProducts } = useEcomerce();
    const router = useRouter(); // Use the router hook to get the current route

    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    // View variables
    let listItemsView, shippingView, discountView, totalView;
    let amount = 0;
    const discount = 24; // Example discount amount
    const shippingFee = shipping ? 20 : 0; // Example shipping cost

    if (products && products.length > 0) {
        amount = calculateAmount(products);
        listItemsView = products.map((item) => (
            <div key={item.id} className="ps-product--cart-mobile">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${item.id}`}>
                        <a>
                            <img src={item.thumbnail} alt={item.title} />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${item.id}`}>
                        <a className="ps-product__title">
                            {item.title} x {item.quantity}
                        </a>
                    </Link>
                    <p>
                        <strong>Price:</strong> ${item.price * item.quantity}
                    </p>
                </div>
            </div>
        ));
    } else {
        listItemsView = <p>No Product.</p>;
    }

    shippingView = (
        <p>
            Shipping <span>{shipping ? `$${shippingFee}.00` : 'Free'}</span>
        </p>
    );

    discountView = (
        <p>
            Discount <span>${discount}.00</span>
        </p>
    );

    totalView = (
        <h3>
            Total <span>${amount + shippingFee - discount}.00</span>
        </h3>
    );

    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                {router.pathname === '/account/shopping-cart' && (
                    <>
                        <h5>Card Totals</h5>
                        <div className="ps-block__product">
                            {listItemsView}
                        </div>
                        <div className="ps-block__footer">
                            <p>
                                Sub-total <span>${amount}.00</span>
                            </p>
                            {shippingView}
                            {discountView}
                            <p>
                                Tax <span>$61.99</span>
                            </p>
                            {totalView}
                            <div className="ps-block__footer-button">
                            <Link href="/account/checkout">
                                    <a className="checkout-btn">PROCEED TO CHECKOUT
                                    <i className="fa-solid fa-arrow-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                {router.pathname === '/account/checkout' && (
                    <>
                        <h3>Order Summary</h3>
                        <div className="ps-block__product">
                            {listItemsView}
                        </div>
                        <div className="ps-block__footer">
                            <p>
                                Sub-total <span>${amount}.00</span>
                            </p>
                            {shippingView}
                            {discountView}
                            {totalView}
                            <div className="ps-block__footer-button">
                                <Link href="/account/payment">
                                    <a className="ps-btn ps-btn--fullwidth">
                                        PLACE ORDER &nbsp;
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <style jsx>{`
                .ps-block--checkout-order {
                    border: 2px solid #f0f0f0;
                    padding: 10px;
                    background: #fff;
                    position: relative;
                    right: -488px;
                    top: -441px;
                }
                .ps-block__content h3 {
                    margin-bottom: 20px;
                    font-size: 18px;
                    font-weight: 700;
                }
                .ps-block__product {
                    margin-bottom: 20px;
                }
                .ps-product--cart-mobile {
                    display: flex;
                    margin-bottom: 15px;
                }
                .ps-product__thumbnail {
                    margin-right: 15px;
                }
                .ps-product__content {
                    flex: 1;
                }
                .ps-product__title {
                    font-size: 14px;
                    font-weight: 600;
                }
                .ps-block__footer p {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    margin-bottom: 10px;
                    text-align: left;
                }
                .ps-block__footer h3 {
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                    font-weight: 700;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
                .ps-block__footer-button {
                    text-align: center;
                }
                .ps-btn--fullwidth {
                    display: inline-block;
                    width: 100%;
                    background-color: #000;
                    color: #fff;
                    text-align: center;
                    padding: 10px 0;
                    border-radius: 4px;
                    text-decoration: none;
                    font-size: 24px;
                    font-weight: 700;
                }
                .ps-btn--fullwidth:hover {
                    background-color: #40a9ff;
                }
                .checkout-btn {
                    display: inline-block;
                    background-color: #f5f5f5;
                    color: #333;
                    padding: 10px 20px;
                    border-radius: 4px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .checkout-btn:hover {
                    background-color: #ddd;
                }
            `}</style>
        </div>
    );
};

export default connect((state) => state)(ModulePaymentOrderSummary);
