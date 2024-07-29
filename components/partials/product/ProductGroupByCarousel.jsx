import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomPagination from '~/components/elements/common/CustomPagination';
import FeaturedListGrid from '../homepage/home-default/FeaturedGrid';

const products = [];

const ProductListing = () => {
    return (
        <div className="product-listing-new">
            <div className="bar-container">
                <div className="search-bar-new">
                    <input type="text" placeholder="Search for anything..." />
                    <button type="submit">
                        <i class="icon-magnifier"></i>
                    </button>
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

            <div className="filter-bar-new">
                <div className="active-filters-new">
                    <span>Active Filters:</span>
                    <span>Electronics Devices ✖️</span>
                    <span>5 Star Rating ✖️</span>
                </div>

                <div className="results-count-new">652 Results found.</div>
            </div>
            <FeaturedListGrid />
            <FeaturedListGrid />

            <CustomPagination />
        </div>
    );
};

export default ProductListing;
export default ProductListing;
