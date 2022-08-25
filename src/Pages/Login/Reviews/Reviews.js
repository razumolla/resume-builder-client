import React, { useEffect, useState } from 'react'
import Review from './Review';

export default function Reviews() {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setTestimonial(data))

    }, [])


    return (
        <section className='mb-24 mt-20'>
            <div>
                <h4 className="text-4xl mb-10 font-bold text-primary text-center"> Our Testimonials</h4>

            </div>
            <div className='flex justify-between'>

                <div>
                    <img src="" className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonial.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    )

}