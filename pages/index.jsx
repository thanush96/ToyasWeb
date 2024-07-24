import React from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import ShopByCharacter from '~/components/elements/skeletons/shop-by-character';
import FeaturedProducts from '~/components/elements/skeletons/FeaturedProducts';
import ToyStore from '~/components/elements/skeletons/ToyStore'; 
import ProductCarousel from '~/components/elements/skeletons/ProductCarousel';
import ShopByAge from '~/components/elements/skeletons/ShopByAge';
import PopularBrand from '~/components/elements/skeletons/PopularBrand';
import Banner from '~/components/elements/skeletons/Banner';
import LatestNews from '~/components/elements/skeletons/LatestNews';
 
const HomepageDefaultPage = () => {
    return (
        <PageContainer title="">
            <main id="homepage-1">
                <HomeDefaultBanner />
                <SiteFeatures />
                <HomeDefaultTopCategories />
                <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                <HomeAdsColumns />
                <HomeDefaultProductListing
                    collectionSlug="Dolls"
                    title="Dolls"/>
                <ShopByCharacter /> {/* Use self-closing tag for ShopByCharacter */}
                <FeaturedProducts />   
                <ToyStore /> {/* Add the ToyStore component here */}   
                <ShopByAge /> {/* Corrected to self-closing tag */}
                <HomeAds />
                <NewArrivals collectionSlug="new-arrivals-products" />
                <PopularBrand />{/* Corrected to self-closing tag */}
                <Banner/> {/* Corrected to self-closing tag */}
                <LatestNews/>
                <Newletters /> 
                {/* <DownLoadApp /> */}
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
