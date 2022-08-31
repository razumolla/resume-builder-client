import React from 'react';

const Form = () => {

    const handleUser = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email }

        fetch('https://resume-builder-6p08.onrender.com/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })


    }

    return (
        <div className='mt-12 p-12'>
            <h2>Add new User</h2>

            <form onSubmit={handleUser}>
                <input type="text" name="name" placeholder='Name' />
                <br />
                <input type="email" name="email" placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;