import React from 'react';
import Banner from '../Home/Banner'
import Benefits from './Benefits';
import Contact from './Contact';
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
            <Contact />
            
        </div>
    );
};

export default Home;