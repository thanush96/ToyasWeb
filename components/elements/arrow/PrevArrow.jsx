import React from 'react';

const PrevArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`showcase-arrow showcase-prev ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i class="fa-solid fa-arrow-left"></i>
            )}
        </a>
    );
};

export default PrevArrow;
