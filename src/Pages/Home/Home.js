import React from 'react';
import Banner from '../Home/Banner'
import Benefits from './Benefits';
import Faq from './Faq';
import Hired from './Hired';
import Review from './Review';
const Home = () => {
    return (
        <div className='m-8'>
                   
            <Banner></Banner>
            <Benefits></Benefits>
            <Hired></Hired>
            <Review></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;