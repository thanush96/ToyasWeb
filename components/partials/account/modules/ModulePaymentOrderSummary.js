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
    const shippingFee = null; // Example shipping cost

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
                        <div className="ps-block__product">{listItemsView}</div>
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
                                    <a className="checkout-btn">
                                        PROCEED TO CHECKOUT
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                {router.pathname === '/account/checkout' && (
                    <>
                        <h3>Order Summary</h3>
                        <div className="ps-block__product">{listItemsView}</div>
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
        </div>
    );
};

export default connect((state) => state)(ModulePaymentOrderSummary);
