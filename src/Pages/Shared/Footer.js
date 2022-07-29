import React from 'react';
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'


const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white cursor-pointer">
        <div>
        <svg className='svgg' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="#08BDBA" d="M58.9,-38.8C63.3,-26.4,44.8,-5.6,31.1,17.8C17.5,41.3,8.8,67.5,-1.3,68.2C-11.4,69,-22.7,44.3,-37.1,20.4C-51.5,-3.5,-68.9,-26.6,-63.2,-39.8C-57.5,-53,-28.7,-56.2,-0.7,-55.8C27.3,-55.3,54.5,-51.3,58.9,-38.8Z" transform="translate(100 100)" />
</svg>
          <div className="flex">
            <img src={instagram} alt="insta" className="w-10 mr-4" />
            <img src={linkedin} alt="linkedin" className="w-10 mr-4 " />

            <img src={facebook} alt="fb" className="w-10 mr-4" />
          </div>
        </div>
        <div>
          <span className="footer-title hover:text-cyan-500">Resume</span>
          <a className="link link-hover">Resume Template</a>
          <a className="link link-hover">Resume Example</a>
          <a className="link link-hover">Resume formates Guide</a>
        </div>
        <div>
          <span className="footer-title  hover:text-cyan-500">CV</span>
  
          <a className="link link-hover">CV Template</a>
          <a className="link link-hover">CV Examples</a>
        </div>
        <div>
          <span className="footer-title  hover:text-cyan-500">Cover Letter</span>
          <a className="link link-hover">Cover Letter Template</a>
          <a className="link link-hover">Cover Letter Examples</a>
          <a className="link link-hover">Format Cover Letter</a>
        </div>
      </footer>
    );
};

export default Footer;