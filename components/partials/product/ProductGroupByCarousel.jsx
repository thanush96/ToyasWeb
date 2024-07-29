import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const products = [
    { id: 1, image: '/static/img/categories/images/d1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$70', rating: 4.5, label: 'HOT', labelClass: 'hot-label', oldPrice: '$75' },
    { id: 2, image: '/static/img/categories/images/d2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$70', rating: 4.5, label: 'HOT', labelClass: 'hot-label', oldPrice: '$75' },
    { id: 3, image: '/static/img/categories/images/d3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$2300', rating: 4.8, label: '18 - 36 Months', labelClass: 'age-label', oldPrice: null },
    { id: 4, image: '/static/img/categories/images/d4.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$360', rating: 4.2, label: 'BEST DEALS', labelClass: 'best-deals-label', oldPrice: null },
    { id: 5, image: '/static/img/categories/images/d5.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$80', rating: 3.9, label: null, labelClass: null, oldPrice: null },
    { id: 6, image: '/static/img/categories/images/d6.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$70', rating: 4.5, label: 'HOT', labelClass: 'hot-label', oldPrice: '$75' },
    { id: 7, image: '/static/img/categories/images/d7.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$2300', rating: 4.8, label: '18 - 36 Months', labelClass: 'age-label', oldPrice: null },
    { id: 8, image: '/static/img/categories/images/d8.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$360', rating: 4.2, label: 'BEST DEALS', labelClass: 'best-deals-label', oldPrice: null },
    { id: 9, image: '/static/img/categories/images/d9.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '$80', rating: 3.9, label: null, labelClass: null, oldPrice: null },
];

const ProductListing = () => {
    return (
        <div className="product-listing-new">
            <div className="search-bar-new">
                <input type="text" placeholder="Search for anything..." />
                <button type="submit">🔍</button>
            </div>
            <div className="filter-bar-new">
                <div className="active-filters-new">
                    <span>Active Filters:</span>
                    <span>Electronics Devices ✖️</span>
                    <span>5 Star Rating ✖️</span>
                </div>
                <div className="sort-bar-new">
                    <span>Sort by:</span>
                    <select>
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Customer Reviews</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </div>
            <div className="results-count-new">652 Results found.</div>
            <div className="product-grid-new">
                {products.map((product) => (
                    <div className="product-card-new" key={product.id}>
                        {product.label && <div className={`product-label-new ${product.labelClass}`}>{product.label}</div>}
                        <div className="product-image-new">
                            <img src={product.image} alt="Product" />
                            <div className="product-hover-icons-new">
                                <button className="hover-icon-new"><i className="fas fa-shopping-cart"></i></button>
                                <button className="hover-icon-new"><i className="fas fa-list-alt"></i></button>
                                <button className="hover-icon-new"><i className="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-details-new">
                            <div className="product-rating-new">⭐ {product.rating} ({Math.floor(Math.random() * 1000)})</div>
                            <p className="product-description-new">{product.description}</p>
                            <div className="product-price-new">
                                {product.oldPrice && <span className="old-price-new">{product.oldPrice}</span>}
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="pagination-new">
                <button className="pagination-button-new">←</button>
                {[...Array(6).keys()].map((page) => (
                    <button className={`pagination-button-new ${page === 0 ? 'active' : ''}`} key={page}>{page + 1}</button>
                ))}
                <button className="pagination-button-new">→</button>
            </div> */}
        </div>
    );
};

export default ProductListing;
