import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../FeaturedGardeners/FeaturedGardeners';
import SeasonalGuide from '../Seasonal Gardening Guide/SeasonalGuide';
import ToolShowcase from '../Gardening Tool/ToolShowcase';
import TopTrendingTips from '../TopTrendingTips/TopTrendingTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-white py-5'>
                <FeaturedGardeners></FeaturedGardeners>
            </div>
            <TopTrendingTips></TopTrendingTips>
            <SeasonalGuide></SeasonalGuide>
            <ToolShowcase></ToolShowcase>

        </div>
    );
};

export default Home;