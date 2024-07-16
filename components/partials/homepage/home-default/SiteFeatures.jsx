import React from 'react';

const SiteFeatures = () => (
    <div className="ps-site-features">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>FASTED DELIVERY</h4>
                        <p>Delivery in 24/H</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-sync"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>24H RETURN</h4>
                        <p>100% money-back</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>SECURE PAYMENT</h4>
                        <p>Your money is safe</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>24/7 Support</h4>
                        <p>Live contact/message</p>
                    </div>
                </div>
                {/* <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-gift"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Gift Service</h4>
                        <p>Support gift service</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
);

export default SiteFeatures;
