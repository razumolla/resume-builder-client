import React from 'react';
import { Link } from 'react-router-dom';
const InterviewQuesAnsJS = () => {
    return (
        <div className='mt-10 mb-96 '>
            <div className='flex flex-wrap justify-center '>
                <div className=''>
                    <Link to='/html' className='btn btn-primary ml-2 mb-2'>Html</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>CSS</Link>
                    <Link to='/js' className='btn btn-primary ml-2 mb-2'>JavaScript</Link>
                    <Link to='/reactjs' className='btn btn-primary ml-2 mb-2'>React JS</Link>
                    <Link to='/mongodb' className='btn btn-primary ml-2'>Mongo DB</Link>
                    <Link to='/nodejs' className='btn btn-primary ml-2'>Node JS</Link>
                    <Link to='/redux' className='btn btn-primary ml-2'>Redux</Link>
                </div>
            </div>

            <h1 className='p-5 mt-4 sm:text-xl lg:text-4xl font-bold '> Most Common <span className='text-primary'>JavaScript/ES6</span> Interview Questions and Answers</h1>
            <div className=' lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>

                <div className='text-left m-8   border-cyan-400 border p-3 py-7 border-spacing-4 rounded-xl  '>
                    <div>
                        <h1 className='text-xl font-bold'>1. How does JavaScript work? </h1>
                        <p className='ml-6 text-xl'>JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.
                        </p>
                    </div>

                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>2. What are the differences between “==” and “===” ? </h1>
                        <p className='ml-6 text-xl'> The differences between both the operators is that  “==”   is used to compare values whereas, “===” is used to compare both values and types.

                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>3. What is callback function?</h1>
                        <p className='ml-6 text-xl'> A callback function is a function passed into another function as a argument, which is then invoked inside the outer function to complete some kind of routine or action.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>4. Tell me about bind, call and apply.?</h1>
                        <p className='ml-6 text-xl'>bind()
                            This method returns a new function , where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
                            <br></br>
                            apply()
                            The apply method is similar to the call() method. The only difference is that, call() method takes arguments separately whereas, apply() method takes arguments as an array.
                            <br></br>
                            call()
                            It’s a predefined method in javascript. This method invokes a method(function) by specifying the owner object call() method allows an object to use the method (function) of another object. call() accepts arguments.



                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>5. What is a Closure in JavaScript? How does it work?</h1>
                        <p className='ml-6 text-xl'> Closure are an ability of a function to remember the variables and functions that are declared in its outer scope.
                            Work: In JavaScript , Closures are created every time a function is created at run time. In other words, a closure is just a fancy name for a function that remembers the external things used inside it.



                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>6.Explain Call by value VS Call by Reference?</h1>
                        <div>
                            <div class="overflow-x-auto mt-2 dark:text-black">
                                <table className="table  ml-2">

                                    <thead className='border border-gray-500 rounded-xl'>
                                        <tr className='font-bold text-xl'>

                                            <th className='font-bold text-xl'>Call by Value

                                            </th>
                                            <th className='font-bold text-xl'>Call by Reference</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-gray-400'>

                                            <td className='text-xl'>Call by value means calling a method with a parameter as value.</td>
                                            <td className='text-xl'>Call by Reference means calling a method with a parameter as a reference</td>
                                        </tr>

                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Through this, the argument value is passed to the parameter.</td>
                                            <td className='text-xl'>Through this, the argument reference is passed to the parameter </td>

                                        </tr>
                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Call by value is get supported by languages such as: C++, PHP, Visual Basic NET</td>
                                            <td className='text-xl'>Call by reference is primarily get supported by language such as JAVA.</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>7.What does the “this” keyword indicate in JavaScript?</h1>
                        <p className='ml-6 text-xl'> In JavaScript , the this keyword refers to an object. Which object depends on how this is being invoked(used or called) . The this keyword refers to different objects depending on how it is used. In an object method, this refers to the object, Alone, this refers to the global object.


                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>8. Difference between get and post?</h1>
                        <div>
                            <div class="overflow-x-auto mt-2 dark:text-black">
                                <table className="table  ml-2">

                                    <thead className='border border-gray-500 rounded-xl'>
                                        <tr className='font-bold text-xl'>

                                            <th className='font-bold text-xl'>POST</th>
                                            <th className='font-bold text-xl'>GET</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-gray-400'>

                                            <td className='text-xl'>Post is used to send data to a server to create/ update a resource.</td>
                                            <td className='text-xl'>Get is used to request data from a specified resource.</td>
                                        </tr>

                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Post request cannot be bookmarked</td>
                                            <td className='text-xl'>Get request can be bookmarked</td>

                                        </tr>
                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Post requests have no restrictions on data length</td>
                                            <td className='text-xl'>Get requests have length restrictions</td>

                                        </tr>
                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Post request are never cashed</td>
                                            <td className='text-xl'>Get request can be cashed</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InterviewQuesAnsJS;