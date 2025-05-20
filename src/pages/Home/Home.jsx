import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../FeaturedGardeners/FeaturedGardeners';
import SeasonalGuide from '../Seasonal Gardening Guide/SeasonalGuide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedGardeners></FeaturedGardeners>
            {/* top tips */}
            <SeasonalGuide></SeasonalGuide>
        </div>
    );
};

export default Home;