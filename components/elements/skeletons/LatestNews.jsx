import React from 'react';
import Image from 'next/image';

const newsItems = [
    {
        id: 1,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '27 Dec, 2023',
        category: 'Top Toys',
        image: '/static/img/categories/images/d1.png',
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Family Fun',
        image: '/static/img/categories/images/d1.png',
        author: 'Admin'
    },
    {
        id: 3,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Kids Activities',
        image: '/static/img/categories/images/d1.png',
        author: 'Admin'
    },
    {
        id: 4,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Learn & Inspire',
        image: '/static/img/categories/images/d1.png',
        author: 'Admin'
    },
];

const LatestNews = () => {
    return (
        <div className="latestNews">
            <h2>Latest News</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
            <div className="newsGrid">
                {newsItems.map(item => (
                    <div key={item.id} className="newsItem">
                        <Image src={item.image} alt={item.title} width={300} height={200} />
                        <h3>{item.title}</h3>
                        <div className="newsMeta">
                            <span>{item.date}</span> | <span>{item.category}</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet construct.Quis vel nunc est aliquam luctus.</p>
                        <div className="newsAuthor">
                            <Image src="/static/img/categories/images/d1.png" alt={item.author} width={30} height={30} />
                            <span>Posted By: {item.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
