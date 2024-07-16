
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import Menu from '~/components/elements/menu/Menu';
import menuData from '~/public/static/data/menu.json';

// Import the local images
import bannerImage1 from '~/public/static/img/banner/banner1.jpg';
import bannerImage2 from '~/public/static/img/banner/banner2.png';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState([]);

    useEffect(() => {
        // Set local images to state
        const localBanners = [
            { id: 1, image: bannerImage1 },
            { id: 2, image: bannerImage2 },
        ];
        setBannerItems(localBanners);
    }, []);

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems.length > 0) {
        const carouseItems = bannerItems.map((item) => (
            <div className="slide-item" key={item.id}>
                <Link href="/shop">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.image.src})`,
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">
                    <div className="menu__content">
                        <Menu
                            source={menuData.product_categories}
                            className="menu--dropdown"
                        />
                    </div>
                </div>
                <div className="ps-section__right">
                    {mainCarouselView}
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
