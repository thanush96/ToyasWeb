import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import '@fortawesome/fontawesome-free/css/all.css';  

// Mock products array
const mockProducts = [
    { id: 1, title: 'Product 1', price: '$2300', status: 'sold-out', discount: null, image: '/static/img/categories/images/d1.png' },
    { id: 2, title: 'Product 2', price: '$220', status: null, discount: null, image: '/static/img/categories/images/d2.png' },
    { id: 3, title: 'Product 3', price: '$150', status: null, discount: '19% OFF', image: '/static/img/categories/images/d3.png' },
    { id: 4, title: 'Product 4', price: '$1200', status: null, discount: null, image: '/static/img/categories/images/d4.png' },
    { id: 5, title: 'Product 5', price: '$800', status: 'hot', discount: '32% OFF', image: '/static/img/categories/images/d5.png' },
    { id: 6, title: 'Product 6', price: '$400', status: null, discount: null, image: '/static/img/categories/images/d6.png' },
    { id: 7, title: 'Product 7', price: '$1000', status: 'new', discount: null, image: '/static/img/categories/images/d7.png' },
    { id: 8, title: 'Product 8', price: '$500', status: null, discount: '15% OFF', image: '/static/img/categories/images/d8.png' },
    { id: 9, title: 'Product 9', price: '$600', status: 'featured', discount: null, image: '/static/img/categories/images/d9.png' },
    { id: 10, title: 'Product 10', price: '$700', status: null, discount: '10% OFF', image: '/static/img/categories/images/d10.png' },
];

const HomeDefaultProductListing = ({ collectionSlug, title }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [collectionSlug]);

    // Views
    let productItemsView;
    if (!loading) {
        productItemsView = mockProducts.map((item) => (
            <ProductDealOfDay product={item} key={item.id} />
        ));
    } else {
        const skeletons = generateTempArray(10).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                    <div className="shop-now">
                        <Link href="/shop">
                            <a className="shop-now-button">Shop Now</a>
                        </Link>
                    </div>
                </div>
                <div className="ps-section__content">
                    <div className="product-grid">
                        {productItemsView}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultProductListing;
