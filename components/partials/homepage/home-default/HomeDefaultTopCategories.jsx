import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/arrow/NextArrow';
import PrevArrow from '~/components/elements/arrow/PrevArrow';
import Link from 'next/link';

// Sample category data
const categories = [
    { id: 1, img: '/static/img/categories/1.png', label: 'Dolls' },
    { id: 2, img: '/static/img/categories/2.png', label: 'Educational Toy' },
    { id: 3, img: '/static/img/categories/3.png', label: 'Puzzle' },
    { id: 4, img: '/static/img/categories/4.png', label: 'Indoor Play' },
    { id: 6, img: '/static/img/categories/6.png', label: 'Outdoor Toy' },
    { id: 7, img: '/static/img/categories/7.png', label: 'Rockers & Rides' },
    { id: 8, img: '/static/img/categories/8.png', label: 'Toy Figure' },
    { id: 9, img: '/static/img/categories/1.png', label: 'Dolls' },
    { id: 10, img: '/static/img/categories/2.png', label: 'Educational Toy' },
    { id: 11, img: '/static/img/categories/3.png', label: 'Puzzle' },
    { id: 12, img: '/static/img/categories/4.png', label: 'Indoor Play' },
];

const HomeDefaultTopCategories = () => {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Shop with Category</h3>
                <Slider {...carouselSettings} className="ps-carousel">
                    {categories.map((category) => (
                        <div className="ps-block--category">
                            {/* <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link> */}
                            <img
                                src={category.img}
                                alt="Martfury"
                                width={180}
                                height={180}
                            />
                            <p>{category.label}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;



