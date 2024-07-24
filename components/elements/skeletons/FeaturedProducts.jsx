import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: '/static/img/categories/images/d1.png',
        status: 'New Coming',
        price: null,
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: '/static/img/categories/images/d2.png',
        status: 'New Coming',
        price: '$590',
    },
];

const FeaturedProducts = () => {
    return (
        <div className="featuredProducts">
            {featuredProducts.map((product) => (
                <div className="productCard" key={product.id}>
                    <div className="productContent">
                        <span className="productStatus">{product.status}</span>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <Link href="/shop">
                        <a className="shopNowButton">Shop Now 🡆</a>
                        </Link>
                    </div>
                    <div className="productImage">
                        <Image src={product.image} alt={product.title} width={200} height={200} />
                        {product.price && <span className="productPrice">{product.price}</span>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;
