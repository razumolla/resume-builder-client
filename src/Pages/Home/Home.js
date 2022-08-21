import React from 'react';

import Banner from '../Home/Banner'
import Benefits from './Benefits';
import Contact from './Contact';
import About from './About';
import Faq from './Faq';
import Hired from './Hired';
import Templates from './Templates';
import WhyUs from './WhyUs';
import Reviews from '../Login/Reviews/Reviews';







const Home = () => {


    return (
        <div className='m-5'>
      
          < div className='m-5' >
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Templates></Templates>
            <Benefits></Benefits>
            <Reviews />
            <Hired></Hired>
            <Contact />
          </div>
            <About />
            <Faq></Faq>

        </div >

    );
};

export default Home;