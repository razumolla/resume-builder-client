import React from 'react';
import { Link } from 'react-router-dom';
import js from '../../../../src/assets/images/imgAfruza/javascript-interview-questions-removebg-preview (1).png';
const InterviewQuesAnsJS = () => {
    return (
        <div className='mt-10 mb-96 '>
            <div className='flex flex-wrap justify-center '>
                <div className=''>
                    <Link to='/html' className='btn btn-primary ml-2 mb-2'>Html</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>CSS</Link>
                    <Link to='/js' className='btn btn-primary ml-2 mb-2'>JavaScript</Link>
                    <Link to='/reactjs' className='btn btn-primary ml-2 mb-2'>React JS</Link>
                    <Link to='/mongodb' className='btn btn-primary ml-2 mb-2'>Mongo DB</Link>
                    <Link to='/nodejs' className='btn btn-primary ml-2 mb-2'>Node JS</Link>
                    <Link to='/redux' className='btn btn-primary ml-2 mb-2'>Redux</Link>
                </div>
            </div>
            <div className='dark:bg-cyan-900 bg-gray-300   lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>

                <h1 className='p-5 mt-4 sm:text-xl lg:text-3xl font-bold '> Most Common <span className='text-primary'>JavaScript/ES6</span> Interview Questions and Answers</h1>

                <div className='lg:flex justify-center sm:flex-cols'>
                    <div>
                        <img src={js} className='ml-16 mt-28 w-3/4  ' alt="" />
                    </div>

                    <div className='lg:m-10 sm:m-8 lg:p-5 sm:p-4 lg:w-1/2 sm:w-0'>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-left font-medium ">
                                Q-1: How does JavaScript work?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.
                                </p>


                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title  text-left font-medium ">
                                Q-2: What are the differences between “==” and “===” ?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> The differences between both the operators is that  “==”   is used to compare values whereas, “===” is used to compare both values and types.
                                </p>
                            </div>

                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title  text-left font-medium ">
                                3. What is callback function?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> A callback function is a function passed into another function as a argument, which is then invoked inside the outer function to complete some kind of routine or action.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-left font-medium ">
                                Q-4. Tell me about bind, call and apply.?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <h1 className='font-bold'>bind()</h1>
                                <p>This method returns a new function , where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
                                </p>
                                <h1 className='font-bold'>apply()</h1>
                                <p>The apply method is similar to the call() method. The only difference is that, call() method takes arguments separately whereas, apply() method takes arguments as an array.
                                </p>
                                <h1 className='font-bold'>call()</h1>
                                <p> It’s a predefined method in javascript. This method invokes a method(function) by specifying the owner object call() method allows an object to use the method (function) of another object. call() accepts arguments.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title  text-left font-medium ">
                                Q-5: Explain Call by value VS Call by Reference?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <h1 className='font-bold'>Call by value</h1>
                                <p>a. Call by value means calling a method with a parameter as value.</p>
                                <p>b. Through this, the argument value is passed to the parameter.</p>
                                <p>c. Call by value is get supported by languages such as: C++, PHP, Visual Basic NET</p>
                                <h1 className='font-bold'>Call by Reference</h1>
                                <p>a. Call by Reference means calling a method with a parameter as a reference.</p>
                                <p>b. Through this, the argument reference is passed to the parameter</p>
                                <p>c. Call by reference is primarily get supported by language such as JAVA.</p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title  text-left font-medium ">
                                Q-6: What does the “this” keyword indicate in JavaScript?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> In JavaScript , the this keyword refers to an object. Which object depends on how this is being invoked(used or called) . The this keyword refers to different objects depending on how it is used. In an object method, this refers to the object, Alone, this refers to the global object.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-left font-medium ">
                                Q-7: Difference between get and post?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <h1 className='font-bold'>Post</h1>
                                <p>a. Post is used to send data to a server to create/ update a resource.</p>
                                <p>b. Post request cannot be bookmarked</p>
                                <p>c. Post requests have no restrictions on data length</p>
                                <p>d. Post request are never cashed</p>
                                <h1 className='font-bold'>Get</h1>
                                <p>a. Get is used to request data from a specified resource.
                                </p>
                                <p>b. Get request can be bookmarked</p>
                                <p>c. Get requests have length restrictions.</p>
                                <p>d. Get request can be cashed</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsJS;