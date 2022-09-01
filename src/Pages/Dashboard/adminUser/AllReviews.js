import React, { useEffect, useState } from 'react'
import AllReview from './AllReview';

export default function AllReviews() {
     const [Allreview, setReview] = useState([]);

  useEffect(() => {
    fetch("https://resume-builder-6p08.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
     <section className="mb-24 mt-10">
     <div>
       <h4 className="text-4xl mb-10 font-bold text-primary text-center">
         {" "}
         Our All Review
       </h4>
     </div>
     <div className="flex justify-between">
       <div>
         <img src="" className="w-24 lg:w-48" alt="" />
       </div>
     </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 

 {Allreview.map((Allreview) => (
      
            <AllReview key={Allreview._id} Allreview={Allreview}></AllReview>
    
        ))}
 </div>
  </section>
  )
}
