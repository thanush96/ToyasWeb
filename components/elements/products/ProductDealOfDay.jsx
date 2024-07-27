import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import Rating from '../Rating';
// import { StrapiProductPriceExpanded } from '~/utilities/product-helper';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
// import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const ProductDealOfDay = ({ product, index }) => {
    const { thumbnailImage, badge, title } = useProduct();

    return (
        <div className={`product item${index + 1}`}>
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
                    <span className="product-discount">{product.discount}</span>
                )}
                {product.feature ? (
                    <img
                        className="feature-image"
                        src={product.image}
                        alt={product.title}
                    />
                ) : (
                    <img
                        className="image"
                        src={product.image}
                        alt={product.title}
                    />
                )}
                <div className="product-hover-icons">
                    <button className="hover-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="hover-icon">
                        <i className="fas fa-list-alt"></i>
                    </button>
                    <button className="hover-icon">
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            </div>

            {product.feature ? (
                <div>
                    <div className="ps-product__content">
                        <div className="ps-product__rating">
                            <Rating />
                            <span> (52,933)</span>
                        </div>
                    </div>
                    <div className="ps-product__content hover">
                        <span className="bold">{product.title}</span>
                        <div className="price">
                            <p className="old">
                                <s>{product.old_price}</s>
                            </p>
                            &nbsp;
                            <p className="new">{product.price} </p>
                        </div>
                    </div>

                    <p style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
                        {product.description}
                    </p>

                    <a className="ps-btn ps-btn--white" href="#">
                        <i className="icon-heart"></i>
                    </a>

                    <a className="ps-btn ps-btn--black" href="#">
                        <i className="fas fa-shopping-cart"></i>
                        &nbsp; ADD TO CARD
                    </a>

                    <a className="ps-btn ps-btn--white" href="#">
                        <i className="fas fa-eye"></i>
                    </a>

                    {/* <button className="hover-icon ps-btn--white">
                        <i className="fas fa-eye"></i>
                    </button> */}
                </div>
            ) : (
                <div className="product-details">
                    {product.rating ? <Rating /> : null}

                    <p style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                        {product.title}
                    </p>

                    <div className="price">
                        <p className="old">
                            <s>{product.old_price}</s>
                        </p>
                        &nbsp;
                        <p className="new">{product.price} </p>
                    </div>
                </div>
            )}
        </div>
    );
};

ProductDealOfDay.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string,
        discount: PropTypes.string,
    }).isRequired,
};

export default connect()(ProductDealOfDay);
