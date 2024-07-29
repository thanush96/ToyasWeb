import React from 'react';

const ModuleProductDetailSharing = () => (
    <div className="row-flex">
        <div className="ps-product__actions row-flex">
            <div style={{ marginRight: '20px' }}>
                <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                    <i className="icon-heart"></i> Add to Wishlist
                </a>
            </div>

            <div>
                <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                    <i class="fa fa-refresh" aria-hidden="true"></i> Add to
                    Compare
                </a>
            </div>
        </div>

        <div className="ps-product__sharing">
            Share Product &nbsp;
            <a href="#">
                <i class="fa fa-clone" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i class="fa fa-refresh" aria-hidden="true"></i>
            </a>
            {/* <a href="#">
                <i class="fa fa-refresh" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i class="fa fa-refresh" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
            <a className="facebook" href="#">
                <i class="fa fa-clone" aria-hidden="true"></i>
            </a>
            <a className="twitter" href="#">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="google" href="#">
                <i className="fa fa-google-plus"></i>
            </a> 
             <a className="instagram" href="#">
                <i className="fa fa-instagram"></i>
            </a> */}
        </div>
    </div>
);

export default ModuleProductDetailSharing;
