import React from 'react';
import payment_img from '../../assets/images/payment_img.jpg'
import { Link } from 'react-router-dom';

const PricingCard = () => {
    return (
        <div className=''>
            <h1 className='pt-3 sm:text-3xl font-extrabold text-transparent lg:text-3xl bg-clip-text bg-secondary'>Premium</h1>

            <div className='flex justify-center items-center '>
                <div className="card bg-secondary shadow-xl mb-5">
                    <img src={payment_img} alt="" />
                    <div className='text-white my-3 text-2xl font-bold'><p>No Automatic Renewal</p>
                    <p>15 Days Money Back Guarantee</p></div>
                    <div className="card-body grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-10">

                        <div className="card bg-white  shadow-xl mb-5">
                            <div className="card-body">
                                <h1 className='text-2xl font-bold'>1 Month</h1>
                                <p>$<span>19.99</span></p>
                                <Link to="/paymentCardOne"><button class="btn btn-xs btn-outline bg-secondary text-white mt-5">Upgrate Now</button></Link>
                            </div>
                        </div>
                        <div className="card bg-white  shadow-xl mb-5">
                            <div className="card-body">
                                <h1 className='text-2xl font-bold'>3 Months</h1>
                                <p>$<span>49.99</span></p>
                                <h5 className='text-red-500'>Save $<span>29</span></h5>
                                <Link to="/paymentCardTwo"><button class="btn btn-xs btn-outline bg-secondary text-white mt-5">Upgrate Now</button></Link>
                            </div>
                        </div>
                        <div className="card bg-white  shadow-xl mb-5">
                            <div className="card-body">
                                <h1 className='text-2xl font-bold'>12 Months</h1>
                                <p>$<span>99.99</span></p>
                                <h5 className='text-red-500'>Save $<span>129</span></h5>
                                <Link to="/paymentCardThree"><button class="btn btn-xs btn-outline bg-secondary text-white mt-5">Upgrate Now</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;