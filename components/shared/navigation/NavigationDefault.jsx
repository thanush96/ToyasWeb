import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        Get free Shipping Order Over 200AED
                    </div>
                    <div className="navigation__right">
                        {/* <Menu
                            source={menuData.menuPrimary.menu_1}
                            className="menu"
                        /> */}
                        <ul className="navigation__extra">
                            <li>
                                <Link href="#">
                                    <a>+123 4564564565</a>
                                </Link>
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
