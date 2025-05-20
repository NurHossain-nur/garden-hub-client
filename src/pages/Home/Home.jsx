import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../FeaturedGardeners/FeaturedGardeners';
import SeasonalGuide from '../Seasonal Gardening Guide/SeasonalGuide';
import ToolShowcase from '../Gardening Tool/ToolShowcase';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedGardeners></FeaturedGardeners>
            {/* top tips */}
            <SeasonalGuide></SeasonalGuide>
            <ToolShowcase></ToolShowcase>
        </div>
    );
};

export default Home;