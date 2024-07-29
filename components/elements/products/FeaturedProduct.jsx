import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import Rating from '../Rating';
import Link from 'next/link';
// import { StrapiProductPriceExpanded } from '~/utilities/product-helper';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
// import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const FeaturedProduct = ({ product, index }) => {
    const { thumbnailImage, badge, title } = useProduct();

    return (
        <Link href="/product/85">
            <div
                className={`Product item${index + 1}`}
                style={{
                    border: '1px solid #c8c8c8',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
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
