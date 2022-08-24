import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../../../src/assets/images/imgAfruza/node js job-interview.jpg';
const InterviewQuesAnsNodeJS = () => {
    return (
        <div className='mt-10  '>
            <div className='flex flex-wrap justify-center mb-8'>
                <div>
                    <Link to='/html' className='btn btn-primary ml-2 mb-2'>Html</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>CSS</Link>
                    <Link to='/js' className='btn btn-primary ml-2 mb-2'>JavaScript</Link>
                    <Link to='/reactjs' className='btn btn-primary ml-2 mb-2'>React JS</Link>
                    <Link to='/mongodb' className='btn btn-primary ml-2 mb-2'>Mongo DB</Link>
                    <Link to='/nodejs' className='btn btn-primary ml-2 mb-2'>Node JS</Link>
                    <Link to='/redux' className='btn btn-primary ml-2 mb-2'>Redux</Link>
                </div>

            </div>
            <div className='dark:bg-cyan-900 bg-gray-300 lg:mb-20 mb-14   lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>
                <h1 className='p-5 md:text-3xl  lg:text-3xl font-bold '> Most Common <span className='text-primary'>Node JS</span> Interview Questions and Answers</h1>
                <div className='lg:flex'>
                    <div className='md:ml-16 mt-3'>
                        <img src={html} className='m-auto mb-8  lg:mt-28 w-3/4 ' alt="" />
                    </div>
                    <div className='lg:m-10 sm:m-8 p-5 sm:p-4 lg:w-1/2 '>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-1: What is NodeJS?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    NodeJS is an open-source, cross-platform,back-end JavaScript runtime environment that runs on th the V8 engine and executes JavaScript code outside a web browser.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-2: Nodejs single threaded or multi threaded?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>  Answer:Nodejs is single threaded because the JavaScript programming language is
                                    single-threaded.

                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-3:  What is Npm?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Npm stands for Node Package Manager. It is a package manager for the Node JavaScript platform.
                                    Npm is known as the world's largest software registry. Open-source developers all over the world use npm to publish and share their source code.

                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-4: What is API?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>API stands for Application Programming Interface.A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-5:Node VS JavaScript?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Node JS:
                                    Node Js is a Javascript runtime environment
                                    It is mostly  is used in server-side
                                    Node Js is used back-end developer
                                </p>
                                <p>JavaScript
                                    JavaScript is a programming language that is used for writing script on the website
                                    JavaScript is basically used on the client-side.
                                    Javascript is used front-end developer


                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-6: What is webpack?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer: Webpack is a static module bundler for JavaScript applications-it takes all the code from your applications and makes it usable in a web browser. Modules are reusable chunks of code built from your app, JavaScript, node-modules,images and the CSS styles which are packaged to be easily used in your website.


                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-7:What is the purpose of database?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer: Database, also called electronic database, any collection of data , or information, that is specially organized for repid search and retrieval by a computer. Databases are structured to facilitate the storage, retrieval, data-processing operations.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsNodeJS;