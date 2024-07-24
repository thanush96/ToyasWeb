import React from 'react';
 
const ageGroups = [
    { label: '0-3 years', color: '#000' },
    { label: '4-5 years', color: '#FF69B4' },
    { label: '6-7 years', color: '#008000' },
    { label: '8-9 years', color: '#FF6347' },
    { label: '10-11 years', color: '#1E90FF' },
    { label: '12+ years', color: '#FFA500' },
];

const ShopByAge = () => {
    return (
        <div className="shop-by-age">
            <div className="container">
                <div className="section-header">
                    <h2>Shop by Age</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
                </div>
                <div className="age-grid">
                    {ageGroups.map((age, index) => (
                        <div key={index} className="age-card" style={{ backgroundColor: age.color }}>
                            <div className="star">{age.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;
