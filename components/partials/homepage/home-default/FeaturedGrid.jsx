import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import '@fortawesome/fontawesome-free/css/all.css';
import FeaturedProduct from '~/components/elements/products/FeaturedProduct';
import NextArrow from '~/components/elements/arrow/NextArrow';
import PrevArrow from '~/components/elements/arrow/PrevArrow';

// Mock products array
const mockProducts = [
    { id: 1, title: 'In publishing and graphic design, Lorem ipsum is', price: '$2300', status: 'sold-out', discount: null, rating: true, image: '/static/img/categories/images/d1.png' },
    { id: 2, title: 'In publishing and graphic design, Lorem ipsum is', price: '$220', old_price: '$1,200', status: null, discount: null, rating: true, image: '/static/img/categories/images/d2.png' },
    { id: 3, title: 'In publishing and graphic design, Lorem ipsum is', price: '$150', rating: true, status: null, discount: '19% OFF', image: '/static/img/categories/images/d3.png' },
    { id: 4, title: 'In publishing and graphic design, Lorem ipsum is', price: '$1200', status: null, rating: true, discount: null, image: '/static/img/categories/images/d4.png' },
    { id: 5, title: 'In publishing and graphic design, Lorem ipsum is', price: '$800', old_price: '$1,200', status: 'HOT', rating: true, discount: '32% OFF', image: '/static/img/categories/images/d5.png' },
    { id: 6, title: 'In publishing and graphic design, Lorem ipsum is', price: '$2300', status: 'sold-out', discount: null, rating: true, image: '/static/img/categories/images/d1.png' },
    { id: 7, title: 'In publishing and graphic design, Lorem ipsum is', price: '$220', old_price: '$1,200', status: null, discount: null, rating: true, image: '/static/img/categories/images/d2.png' },
    { id: 8, title: 'In publishing and graphic design, Lorem ipsum is', price: '$150', rating: true, status: null, discount: '19% OFF', image: '/static/img/categories/images/d3.png' },
    { id: 9, title: 'In publishing and graphic design, Lorem ipsum is', price: '$1200', status: null, rating: true, discount: null, image: '/static/img/categories/images/d4.png' },
    { id: 10, title: 'In publishing and graphic design, Lorem ipsum is', price: '$800', old_price: '$1,200', status: 'HOT', rating: true, discount: '32% OFF', image: '/static/img/categories/images/d5.png' },
];

const FeaturedListGrid = ({ collectionSlug, title }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [collectionSlug]);

    let productItemsView;
    if (!loading) {
        productItemsView = mockProducts.map((item, index) => (
            <FeaturedProduct product={item} key={item.id} index={index} />
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
                <div className="grid-container__similar">
                    {productItemsView}
                </div>
            </div>
        </div>
    );
};

export default FeaturedListGrid;
