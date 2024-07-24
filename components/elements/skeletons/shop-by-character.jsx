import React, { useState } from 'react';
 
const mockCharacters = [
    { id: 1, name: 'Lorem Ipsum', image: '/static/img/categories/images/c1.png' },
    { id: 2, name: 'Lorem Ipsum', image: '/static/img/categories/images/c2.png' },
    { id: 3, name: 'Lorem Ipsum', image: '/static/img/categories/images/c3.png' },
    { id: 4, name: 'Lorem Ipsum', image: '/static/img/categories/images/c4.png' },
];

const ShopByCharacter = () => {
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    const prevCharacter = () => {
        setCurrentCharacterIndex((prevIndex) => (prevIndex === 0 ? mockCharacters.length - 1 : prevIndex - 1));
    };

    const nextCharacter = () => {
        setCurrentCharacterIndex((prevIndex) => (prevIndex === mockCharacters.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="shop-by-character">
            <div className="container">
                <div className="section-header">
                    <h2>Shop by Character</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
                </div>
                <div className="character-grid-wrapper">
                    <button className="nav-button prev" onClick={prevCharacter}></button>
                    <div className="character-grid">
                        {mockCharacters.map((character, index) => (
                            <div className="character-card-wrapper" key={character.id}>
                                <div className={`character-card ${index === currentCharacterIndex ? 'active' : ''}`}>
                                    <img src={character.image} alt={character.name} />
                                </div>
                                <p className="character-name">{character.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className="nav-button next" onClick={nextCharacter}></button>
                </div>
            </div>
        </div>
    );
};

export default ShopByCharacter;
