import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useProduct from '~/hooks/useProduct';
import Rating from '../Rating';
import Link from 'next/link';

const FeaturedProduct = ({ product, index }) => {
    const { thumbnailImage, badge, title } = useProduct();

    return (
        <Link href="/product/85">
            <div
                // className={`product-item item${index + 1}`}
                style={{
                    border: '1px solid #c8c8c8',
                    margin: '10px',
                    padding: '2px',
                    borderRadius: '2px',
                }}>
                <div className="product-thumbnail">
                    {product.status && (
                        <span
                            className={`product-status ${product.status} ${
                                product.status === 'SOLD OUT' ? 'sold-out' : ''
                            }`}>
                            {product.status.replace('-', ' ')}
                        </span>
                    )}

                    {product.discount && (
                        <span className="product-discount">
                            {product.discount}
                        </span>
                    )}

                    <img
                        className="image"
                        src={product.image}
                        alt={product.title}
                    />

                    <div className="product-hover-icons">
                    <button className="hover-icon1">
                        <img src="/static/img/icons/love.png" alt="Wishlist" />
                    </button>
                    <button className="hover-icon2">
                        <img src="/static/img/icons/shopping.png" alt="Shopping Cart" style={{ width: '24px', height: '24px' }} />
                    </button>
                    <button className="hover-icon2">
                        <img src="/static/img/icons/open-eye.png" alt="eyes" style={{ width: '24px', height: '24px' }} />
                    </button>
                    </div>
                </div>
                <div className="product-details">
                    {product.rating ? <Rating /> : null}

                    <p>
                        {product.title.length > 15
                            ? `${product.title.substring(0, 15)}...`
                            : product.title}
                    </p>

                    <div className="price">
                        <p className="old">
                            <s>{product.old_price}</s>
                        </p>
                        &nbsp;
                        <p className="new">{product.price} </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

FeaturedProduct.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string,
        discount: PropTypes.string,
    }).isRequired,
};

export default connect()(FeaturedProduct);
