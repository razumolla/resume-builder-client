import React from 'react';


const CLPersonalInfo = ({formData, setFormData}) => {
    // const handleAdd = (e) =>{
    //     e.preventDefault();
    //     const firstName = e.target.firstName.value;
    //     const lastName = e.target.lastName.value;
    //     const address = e.target.address.value;
    //     const city = e.target.city.value;
    //     const postalcode = e.target.postalcode.value;
    //     const phone = e.target.phone.value;
    //     const email = e.target.email.value;
       
    //     const aboutForm = {firstName, lastName, address, city, postalcode, phone, email};
    //     console.log(aboutForm);
    //     const url = `http://localhost:5000/aboutForm`
    //     fetch(url,{
    //         method: 'POST',
    //         headers: {
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(aboutForm)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log('success', data);
    //         alert('users added successfull !!!')
    //         e.target.reset();
    //     })
    //  }
    
    return (
        <div className='mt-28 mb-16 m-10'>
        <div className='flex '>
            <div class="grid grid-rows-12 p-2 rounded-xl ">
                <div class="col-start-1 col-end-12 ... bg-gray-300 rounded-xl">

                    <ul class="steps bg-base-300 p-3  
                    place-items-center">
                        <li class="step step-primary ml-2"> <p className=''>CONTACT</p> </li>
                        <li class="step ml-5  "> <p className='ml-8'>EXPERIENCE</p> </li>
                        <li class="step  ml-12 "><p className='ml-5'>EDUCATION</p> </li>
                        <li class="step  ml-4 "> <p className='ml-2'>SKILLS</p> </li>
                        <li class="step ml-3"> <p className='ml-1'>ABOUT</p> </li>
                        {/* <li class="step   ml-3"> <p>FINISHIT</p> </li> */}
                    </ul>
                    <div>
                        <h1 className='text-3xl mt-8'>Please enter your <span className='text-primary font-bold'>contact</span> infos</h1>
                        <p className='p-1 mb-5'>It allows employers to see how they can cantact you</p>

                        <form action="" className='p-3' >
                            <div className='flex gap-2 mb-3 '>
                                <input type="text" value={formData.firstName} onChange={(e)=>setFormData({ ...formData, firstName:e.target.value})} placeholder="FIRST NAME" class="input input-bordered input-secondary w-full max-w-xs" />
                                <input type="text" value={formData.lastName} onChange={(e) =>setFormData({ ...formData, lastName:e.target.value})} placeholder="LAST NAME" class="input input-bordered input-secondary w-full max-w-xs" />
                            </div>
                            <input type="text " value={formData.address} onChange={(e) => setFormData({
                                ...formData, address:e.target.value})} placeholder="ADDRESS" class="input input-bordered p-3 mb-3 input-secondary w-full max-w-lg" />
                            <div className='flex gap-2 mb-3 '>
                                <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city:e.target.value})} placeholder="CITY" class="input input-bordered input-secondary w-full max-w-xs" />
                                <input type="number" value={formData.postalcode} onChange={(e) => setFormData({...formData, postalcode:e.target.value})}   placeholder="POSTAL CODE" class="input input-bordered input-secondary w-full max-w-xs" />
                            </div>
                            <div className='flex gap-2 mb-3 '>
                                <input type="number" value={formData.phone} onChange={(e) => setFormData({...formData, phone:e.target.value})} placeholder="PHONE NUMBER" class="input input-bordered input-secondary w-full max-w-xs" />
                                <input type="email"  value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}  placeholder="EMAIL" class="input input-bordered input-secondary w-full max-w-xs" />
                            </div>
                        </form>

                    </div>
                </div>

            </div>
           
        </div>
    </div>
    );
};

export default CLPersonalInfo;