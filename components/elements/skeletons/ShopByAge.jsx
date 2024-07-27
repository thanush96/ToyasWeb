import Image from 'next/image';
import React from 'react';

const ageGroups = [
    { label: '0-3 years', color: '#000', src: '/static/img/group/g1.png' },
    { label: '4-5 years', color: '#FF69B4', src: '/static/img/group/g2.png' },
    { label: '6-7 years', color: '#008000', src: '/static/img/group/g3.png' },
    { label: '8-9 years', color: '#FF6347', src: '/static/img/group/g4.png' },
    { label: '10-11 years', color: '#1E90FF', src: '/static/img/group/g5.png' },
    { label: '12+ years', color: '#FFA500', src: '/static/img/group/g6.png' },
];

const ShopByAge = () => {
    return (
        <div className="shop-by-age">
            <div className="container">
                <div className="section-header">
                    <h2>Shop by Age</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Id fames there
                        are many vulputate eget dolor.
                    </p>
                </div>

                <div className="brandGrid">
                    {ageGroups.map((item) => (
                        <div key={item.id} className="brandItem">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={150}
                                height={150}
                            />
                        </div>
                    ))}
                </div>

                {/* <div className="age-grid">
                    {ageGroups.map((age, index) => (
                        <div key={index} className="age-card" style={{ backgroundColor: age.color }}>
                            <div className="star">{age.label}</div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default ShopByAge;
