import React from 'react';
import CoverLetter from '../CoverLetter/CoverLetter';
import Banner from '../Home/Banner'
import Login from '../Login/Login';
import Benefits from './Benefits';
import Faq from './Faq';
import Hired from './Hired';
import Review from './Review';
import Templates from './Templates';
const Home = () => {
    return (
        <div className='m-5'>
           
            <Banner></Banner>
            <Templates></Templates>
            <Benefits></Benefits>
            <Hired></Hired>
            <Review></Review>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;