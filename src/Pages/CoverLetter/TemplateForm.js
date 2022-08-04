import React from 'react';
import { Link } from 'react-router-dom';

const TemplateForm = () => {

     const handleAdd = (e) =>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const postalcode = e.target.postalcode.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
       
        const aboutForm = {firstName, lastName, address, city, postalcode, phone, email};
        console.log(aboutForm);
        const url = `http://localhost:5000/aboutForm`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(aboutForm)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfull !!!')
            e.target.reset();
        })
     }

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
                            <li class="step   ml-3"> <p>FINISHIT</p> </li>
                        </ul>
                        <div>
                            <h1 className='text-3xl mt-8'>Please enter your <span className='text-primary font-bold'>contact</span> infos</h1>
                            <p className='p-1 mb-5'>It allows employers to see how they can cantact you</p>

                            <form action="" className='p-3' onSubmit={handleAdd} >
                                <div className='flex gap-2 mb-3 '>
                                    <input type="text" name="firstName" placeholder="FIRST NAME" class="input input-bordered input-secondary w-full max-w-xs" />
                                    <input type="text" name="lastName" placeholder="LAST NAME" class="input input-bordered input-secondary w-full max-w-xs" />
                                </div>
                                <input type="text " name="address" placeholder="ADDRESS" class="input input-bordered p-3 mb-3 input-secondary w-full max-w-lg" />
                                <div className='flex gap-2 mb-3 '>
                                    <input type="text" name="city" placeholder="CITY" class="input input-bordered input-secondary w-full max-w-xs" />
                                    <input type="number" name="postalcode"  placeholder="POSTAL CODE" class="input input-bordered input-secondary w-full max-w-xs" />
                                </div>
                                <div className='flex gap-2 mb-3 '>
                                    <input type="number" name="phone" placeholder="PHONE NUMBER" class="input input-bordered input-secondary w-full max-w-xs" />
                                    <input type="email" name="email"  placeholder="EMAIL" class="input input-bordered input-secondary w-full max-w-xs" />
                                </div>
                               <div className='flex justify-end'>
                                {/* <button className='btn btn-primary' type='submit'>submit</button> */}

                                {/* <Link to="/experience" className='btn btn-primary'>Next to Experience ⟼
                                
                                 </Link> */}

                                  <Link to="/experience" className='btn btn-primary'>
                                  <button className='btn btn-primary' type='submit'>Next to Experience ⟼</button>
                                 </Link>

                               
                               </div>
                             

                            </form>

                        </div>
                    </div>

                </div>
                <div class="grid grid-rows-12 p-2">
                    <div class="col-start-1 col-end-6 ... bg-gray-200">
                        02
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsam, voluptatibus nostrum quod natus voluptate modi corporis et quisquam fuga officia tenetur dolore animi laborum impedit! Laudantium fugiat autem facere.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateForm;
