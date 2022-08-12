import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
const PaymentCardTwo = () => {
    return (
        <div className='mt-10'>
            <h1 className='pt-20 sm:text-3xl font-extrabold text-transparent lg:text-3xl bg-clip-text bg-secondary'></h1>

            <div className='flex justify-center items-center '>
                <div className="card w-96 bg-white shadow-2xl shadow-gray-500 mb-5">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='text-start'>
                                <h3 className='text-1xl font-bold text-secondary'>Premium Account:</h3>
                                <p>Three Months</p>
                            </div>
                            <div className='text-end'>
                                <h3 className='text-1xl font-bold text-secondary'>Total Including</h3>
                                <h3 className='text-1xl font-bold text-secondary'>Tax/VAT:</h3>
                                <p>49.99 USD</p>
                            </div>
                        </div>

                        <button className="btn btn-sm btn-outline bg-secondary mt-20">Pay Now</button>
                        <div className='flex justify-between '>

                            <div><img style={{ width: "400px", height: "150px" }} className="img-center" src="https://d.novoresume.com/images/pricing/lock-icon.svg" alt="" /></div>
                            <div className='mt-3 pl-2 text-start'>
                                <p >* All transactions are secure and encrypted, the payments are being processed through Stripe which handles millions of transactions each month.</p>
                            </div>
                        </div>

                        <div class="card-actions justify-start">


                            <Link to="/pricing"><button class="btn btn-link text-secondary p-0"><span><FaChevronLeft /></span> Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCardTwo;