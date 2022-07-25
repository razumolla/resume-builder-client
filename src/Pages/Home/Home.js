import React from 'react';
import Banner from '../Home/Banner'
import Faq from './Faq';
import Hired from './Hired';
import Review from './Review';
const Home = () => {
    return (
        <div className='m-5'>
                   
            <Banner></Banner>
            <Hired></Hired>
            <Review></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;