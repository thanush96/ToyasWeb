// import React from 'react';
// import Image from 'next/image';

// const newsItems = [
//     {
//         id: 1,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '27 Dec, 2023',
//         category: 'Top Toys',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 2,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Family Fun',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 3,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Kids Activities',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 4,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Learn & Inspire',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
// ];

// const LatestNews = () => {
//     return (
//         <div className="latestNews">
//             <h2>Latest News</h2>
//             <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
//             <div className="newsGrid">
//                 {newsItems.map(item => (
//                     <div key={item.id} className="newsItem">
//                         <Image src={item.image} alt={item.title} width={300} height={230} />
//                         <h3>{item.title}</h3>
//                         <div className="newsMeta">
//                             <span>{item.date}</span> | <span>{item.category}</span>
//                         </div>
//                         <p>Lorem ipsum dolor sit amet construct.Quis vel nunc est aliquam luctus.</p>
//                         <div className="newsAuthor">
//                             <Image src="/static/img/categories/images/user.png" alt={item.author} width={30} height={30} />
//                             <span>Posted By: {item.author}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LatestNews;



import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const newsItems = [
    {
        id: 1,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '27 Dec, 2023',
        category: 'Top Toys',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Family Fun',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 3,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Kids Activities',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 4,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Learn & Inspire',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
];

const HomeDefaultBanner = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(newsItems);
    }, []);

    const carouselSetting = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Laptop and monitor screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Tablet screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="ps-carousel">
             <div className="latestNews">
            <h2>Latest News</h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur. Id</p>
            <Slider {...carouselSetting}>
                {news.map(item => (
                    <div key={item.id} className="newsItem">
                        <Image src={item.image} alt={item.title} width={300} height={230} />
                        <h3>{item.title}</h3>
                        <div className="newsMeta">
                            <span>{item.date}</span> | <span>{item.category}</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet construct.Quis vel nunc est aliquam luctus.</p>
                        <div className="newsAuthor">
                            <Image src="/static/img/categories/images/user.png" alt={item.author} width={30} height={30} />
                            <span>Posted By: {item.author}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

export default HomeDefaultBanner;
