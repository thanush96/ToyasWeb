import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ product }) => {
    // Views
    let priceView;

    // if (product.is_sale) {
    //     priceView = (
    //         <h4 className="ps-product__price sale">
    //             <del className="mr-2">&{product.sale_price}</del>$
    //             {product.price}
    //         </h4>
    //     );
    // } else {
    //     priceView = <h4 className="ps-product__price">${product.price}</h4>;
    // }

    priceView = (
        <h4 className="ps-product__price sale">
            $1699&nbsp;
            <del className="mr-2">$1999.0</del>
            <span className="product-discount-auto">21% OFF</span>

        </h4>
    );

    return (
        <div>
            <div className="ps-product__specification">
                {/* <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link> */}

                <div>
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>

                    <p className="tags">
                        <strong> Tags</strong> Loren
                    </p>
                </div>

                <div>
                    <p className="tags">
                        <strong> Availability</strong>
                        <a>In Stock</a>
                    </p>

                    <p className="categories">
                        <strong> Categories:</strong>
                        <Link href="/shop">
                            <a>Toys</a>
                        </Link>
                        <Link href="/shop">
                            <a>School</a>
                        </Link>
                        <Link href="/shop">
                            <a>Babies & Moms</a>
                        </Link>
                    </p>
                </div>
            </div>

            {priceView}
        </div>
    );
};

export default ModuleProductDetailSpecification;
