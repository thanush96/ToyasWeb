import React from 'react';

const NextArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`showcase-arrow showcase-next ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i class="fa-solid fa-arrow-right"></i>
            )}
        </a>
    );
};

export default NextArrow;
