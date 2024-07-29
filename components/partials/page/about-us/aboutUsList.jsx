import React from 'react';
import Link from 'next/link';

const AboutUsList = () => {
    return (
        <div className="aboutUsList">
            <div className="textSection">
                <h2 className="title">Lorem Ipsum Dolar Sumit Lorem</h2>
                <div className="image">
                    <img src="/static/img/categories/images/r2.png" alt="Toys Box" />
                </div>
            </div>
            <div className="listSection">
                <div className="listItem">
                    <img src="/static/img/categories/images/icon png/1.png" className="icon" alt="Quality Icon" />
                    <div className="listContent">
                        <h3>Quality</h3>
                        <p>We uphold the highest standards in the toys and games we offer.</p>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icon png/2.png" className="icon" alt="Innovation Icon" />
                    <div className="listContent">
                        <h3>Innovation</h3>
                        <p>We seek out the latest trends and innovations to delight our customers.</p>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icon png/3.png" className="icon" alt="Customer Satisfaction Icon" />
                    <div className="listContent">
                        <h3>Customer Satisfaction</h3>
                        <p>We prioritize customer satisfaction and strive to exceed expectations in every interaction.</p>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icon png/4.png" className="icon" alt="Creativity Icon" />
                    <div className="listContent">
                        <h3>Creativity</h3>
                        <p>We celebrate the diverse imaginations of children and inspire creativity through our products.</p>
                    </div>
                </div>
                <div className="listItem">
                    <img src="/static/img/categories/images/icon png/5.png" className="icon" alt="Community Icon" />
                    <div className="listContent">
                        <h3>Community</h3>
                        <p>We are committed to building a supportive and inclusive community of families who share our passion for play.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsList;
