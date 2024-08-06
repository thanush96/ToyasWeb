import React, { useState } from 'react';
import Link from 'next/link';
import MenuDropdown from '~/components/elements/menu/MenuDropdown';
import MegaMenu from '~/components/elements/menu/MegaMenu';

const TopCategoriesMenu = ({ source, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Menu items definition
    const menuItems = [
        {
            icon: 'icon-star',
            text: 'Dolls',
            url: '/shop'
        },
        {
            icon: 'icon-laundry',
            text: 'Educational Toy',
            url: '/shop',
            extraClass: 'menu-item-has-children has-mega-menu',
            subClass: 'sub-menu',
            mega: true
        },
        {
            icon: 'icon-star',
            text: 'Games and puzzle',
            url: '/shop'
        },
        {
            icon: 'icon-star',
            text: 'Indoor Play',
            url: '/shop'
        },
        {
            icon: 'icon-heart-pulse',
            text: 'Kids Books',
            url: '/shop'
        },
        {
            icon: 'icon-diamond2',
            text: 'Outdoor Toy',
            url: '/shop'
        },
        {
            icon: 'icon-desktop',
            text: 'Rockers & Rides',
            url: '/shop',
            extraClass: 'menu-item-has-children has-mega-menu',
            subClass: 'sub-menu'
        },
        {
            icon: 'icon-baby-bottle',
            text: 'Toy Figure',
            url: '/shop'
        }
    ];

    // Views
    let menuView;
    if (source) {
        menuView = source.map((item) => {
            if (item.subMenu) {
                return <MenuDropdown source={item} key={item.text} />;
            } else if (item.megaContent) {
                return <MegaMenu source={item} key={item.text} />;
            } else {
                return (
                    <li key={item.text}>
                        <Link href={item.url}>
                            <a>
                                {item.icon && <i className={item.icon}></i>}
                                {item.text}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }

    return (
        <div className="menu">
            <div className="menu-title" onClick={toggleVisibility}>
                <i className="fa fa-bars"></i> Top Categories
            </div>
            <ul className={`${className} ${isVisible ? 'visible' : 'hidden'}`}>
                {menuItems.map((item) => (
                    <li key={item.text}>
                        <Link href={item.url}>
                            <a>
                                {item.icon && <i className={item.icon}></i>}
                                {item.text}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            
            <style jsx>{`
                .menu {
                    width: 80%;
                    max-width: 250px;
                    margin-top: -80px;
                }
                .menu-title {
                    cursor: pointer;
                    background-color: #000;
                    color: #fff;
                    padding: 20px 21px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    font-size: 22px;
                    font-weight: bold;
                }
                .menu-title i {
                    margin-right: 10px;
                }
                .hidden {
                    display: none;
                }
                .visible {
                    display: block;
                }
                .menu ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                .menu li {
                    padding: 10px;
                    background: #f9f9f9;
                    border-bottom: 1px solid #eee;
                }
                .menu li a {
                    text-decoration: none;
                    color: #333;
                }
                .menu li a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default TopCategoriesMenu;
