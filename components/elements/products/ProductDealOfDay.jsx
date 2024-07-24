import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import Rating from '../Rating';
import { StrapiProductPriceExpanded } from '~/utilities/product-helper';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const ProductDealOfDay = ({ product }) => {
    const { thumbnailImage, badge, title } = useProduct();

    return (
        <div className="product">
            <div className="product-thumbnail">
                {product.status && <span className={`product-status ${product.status}`}>{product.status.replace('-', ' ')}</span>}
                {product.discount && <span className="product-discount">{product.discount}</span>}
                <img src={product.image} alt={product.title} />
                <div className="product-hover-icons">
                    <button className="hover-icon"><i className="fas fa-shopping-cart"></i></button>
                    <button className="hover-icon"><i className="fas fa-list-alt"></i></button>
                    <button className="hover-icon"><i className="fas fa-eye"></i></button>
                </div>
            </div>
            <div className="product-details">
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>
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
