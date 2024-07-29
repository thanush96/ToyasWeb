import React, { useEffect, useState } from 'react';
import { Slider, Radio } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const categoriesData = [
    {
        name: 'baby & toddler',
        slug: 'baby-toddler',
        subcategories: [
            { name: 'Baby & Toddler', slug: 'baby-toddler-1' },
            { name: 'Bath Toys', slug: 'bath-toys-1' },
            { name: 'Baby & Toddler', slug: 'baby-toddler-2' },
            { name: 'Bath Toys', slug: 'bath-toys-2' }
        ]
    },
    {
        name: 'Action figure',
        slug: 'action-figure',
        subcategories: [
            { name: 'Baby & Toddler', slug: 'baby-toddler-3' },
            { name: 'Bath Toys', slug: 'bath-toys-3' },
            { name: 'Baby & Toddler', slug: 'baby-toddler-4' },
            { name: 'Bath Toys', slug: 'bath-toys-4' }
        ]
    }
];

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState(null);
    const [ageRange, setAgeRange] = useState([0, 18]);

    const { slug } = Router.query;

    useEffect(() => {
        // Simulate fetching categories
        setLoading(true);
        setTimeout(() => {
            setCategories(categoriesData);
            setLoading(false);
        }, 500);
    }, []);

    function handleGenderChange(e) {
        setGender(e.target.value);
        // Update the query params as needed
    }

    function handleAgeRangeChange(value) {
        setAgeRange(value);
        // Update the query params as needed
    }

    const renderCategories = (categories) => {
        return categories.map((category) => (
            <li key={category.slug} className={category.slug === slug ? 'active' : ''}>
                <Link href={`/category/${category.slug}`}>
                    <a>
                        {category.name}
                    </a>
                </Link>
                {category.subcategories && category.subcategories.length > 0 && (
                    <ul>
                        {renderCategories(category.subcategories)}
                    </ul>
                )}
            </li>
        ));
    };

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">CATEGORY</h4>
            {!loading && categories && categories.length > 0 && (
                <ul className="ps-list--categories">
                    {renderCategories(categories)}
                </ul>
            )}
            
            <h4 className="widget-title">GENDER</h4>
            <Radio.Group onChange={handleGenderChange} value={gender} className="gender-options">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="unisex">Unisex</Radio>
            </Radio.Group>

            <h4 className="widget-title">AGE RANGE</h4>
            <Slider
                range
                defaultValue={[0, 18]}
                max={18}
                value={ageRange}
                onChange={handleAgeRangeChange}
            />
            <div className="age-range-inputs">
                <input type="text" value={ageRange[0]} readOnly placeholder="Min Years" />
                <span> - </span>
                <input type="text" value={ageRange[1]} readOnly placeholder="Max Years" />
            </div>
        </aside>
    );
};

export default WidgetShopCategories;
