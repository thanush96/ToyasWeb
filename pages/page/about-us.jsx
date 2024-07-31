import React from 'react';

// import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutUs from '~/components/partials/page/about-us/AboutUs';
import AboutUsList from '~/components/partials/page/about-us/AboutUsList';
import AboutUsTable from '~/components/partials/page/about-us/AboutUsTable';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import PopularBrand from '~/components/elements/skeletons/PopularBrand';


const AboutUsPage = () => {
    // const breadCrumb = [
    //     {
    //         text: 'Home',
    //         url: '/',
    //     },
    //     {
    //         text: 'About Us',
    //     },
    // ];
    return (
        <PageContainer title="About Us">
            <div className="ps-page--single">
                {/* <img src="/static/img/bg/about-us.jpg" alt="" /> */}
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <AboutUs />
                <AboutUsList />
                <AboutUsTable />
                <PopularBrand />
                {/* <OurTeam /> */}
                {/* <AboutAwards /> */}
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};
export default AboutUsPage;
