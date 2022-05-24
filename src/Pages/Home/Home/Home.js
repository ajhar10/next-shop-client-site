import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HighlightProducts from '../HighlightProducts/HighlightProducts';
import LatestNews from '../LatestNews/LatestNews';
import OurExprience from '../OurExprience/OurExprience';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <HighlightProducts />
            <OurExprience />
            <Reviews />
            <LatestNews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;