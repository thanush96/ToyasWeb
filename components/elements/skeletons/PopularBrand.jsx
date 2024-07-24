import React from 'react';
import Image from 'next/image';

const brands = [
    { id: 1, src: '/static/img/categories/images/c1.png', alt: 'Kids Party' },
    { id: 2, src: '/static/img/categories/images/c2.png', alt: 'Kids Zone' },
    { id: 3, src: '/static/img/categories/images/c3.png', alt: 'Kidz Play the World' },
    { id: 4, src: '/static/img/categories/images/d4.png', alt: 'Game Room' },
    { id: 5, src: '/static/img/categories/images/d5.png', alt: 'Game Room' },
    { id: 6, src: '/static/img/categories/images/d6.png', alt: 'Kids Children Play' },
];

const PopularBrand = () => {
    return (
        <div className="popularBrand">
            <h2>Popular Brand</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
            <div className="brandGrid">
                {brands.map(brand => (
                    <div key={brand.id} className="brandItem">
                        <Image src={brand.src} alt={brand.alt} width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularBrand;
