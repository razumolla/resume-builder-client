import React from 'react';
import { Link } from 'react-router-dom';

const InterviewQuesAnsCSS = () => {
    return (
        <div className='mt-10 mb-96 '>
            <div className='flex flex-wrap justify-center '>
                <div className=''>
                    <Link to='/html' className='btn btn-primary ml-2 mb-2'>Html</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>CSS</Link>
                    <Link to='/js' className='btn btn-primary ml-2 mb-2'>JavaScript</Link>
                    <Link to='/reactjs' className='btn btn-primary ml-2 mb-2'>React JS</Link>
                    <Link to='/css' className='btn btn-primary ml-2'>Mongo DB</Link>
                    <Link to='/css' className='btn btn-primary ml-2'>Node JS</Link>
                    <Link to='/css' className='btn btn-primary ml-2'>Redux</Link>
                </div>

            </div>
            <h1 className='p-5 mt-4 sm:text-xl lg:text-4xl font-bold '> Most Common <span className='text-primary'>CSS</span> Interview Questions and Answers</h1>
            <div className=' lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0
             dark:bg-cyan-900 dark:p-4'>

                <div className='text-left m-8   border-cyan-400 border p-3 py-7 border-spacing-4 rounded-xl  '>
                    <div>
                        <h1 className='text-xl font-bold'>1. What is CSS?</h1>
                        <p className='ml-6 text-xl'>CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.</p>
                    </div>
                    <div className='mt-2 dark:bg-cyan-900'>
                        <h1 className='text-xl font-bold'>2. What are some differences between absolute position and relative position?</h1>
                        <div>
                            <div class="overflow-x-auto mt-2">
                                <table className="table  ml-2 dark:bg-cyan-900 dark:text-black">

                                    <thead className='border border-gray-500 rounded-xl dark:bg-cyan-900'>
                                        <tr className='font-bold text-xl dark:bg-cyan-900'>

                                            <th className='font-bold text-xl'>Position Absolute</th>
                                            <th className='font-bold text-xl'>Position Relative</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-gray-400'>

                                            <td className='text-xl'>Absolute- the element is positioned absolutely to its first positioned parent.</td>
                                            <td className='text-xl'>Relative the element is positioned relative to its normal position</td>
                                        </tr>

                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>Absolute is the total of all existence.</td>
                                            <td className='text-xl'>Relative is always in proportion to a whole.</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>3. What is a box model? And what are the different elements of a box model?</h1>
                        <p className='ml-6 text-xl'> Box Model: The CSS box model is a container that contains multiple properties including borders, margin, padding and the content itself.
                            Border style: Border-right-style, Border-left-style, border-top-style, border-bottom-style, border-style.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>4. Difference between transition and transform?</h1>
                        <p className='ml-6 text-xl'>The Transform property in CSS moves or modifies the appearance of an element, whereas the Transition property seamlessly and gently transitions the element from one state to another.

                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>5. What is a Pseudo element? Give an example of pseudo element?</h1>
                        <p className='ml-6 text-xl'>A CSS pseudo-element is used to style specified parts of an element. The syntax of pseudo-elements:
                            Example: ::after, ::before, ::selection, ::first-line, ::first-letter etc.


                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>6.What is a CSS Preprocessor? What are some benefits of Sass?</h1>
                        <p className='ml-6 text-xl'> A CSS preprocessor is a program that lets you generate CSS from the preprocessor’s own unique syntax.
                            Sass facilitates you to write clean, easy and less CSS in a programming construct, It is more stable. Powerful and elegant because it is an extension of CSS. So , it is easy for designers and developers to work more efficiently and quickly.


                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>6.What is CSS Specificity?</h1>
                        <p className='ml-6 text-xl'> CSS specificity is an important topic to understand if you want to get better at CSS.It is the set of rules applied to CSS selectors that determines which style is applied to an element.


                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>2. What are some differences between absolute position and relative position?</h1>
                        <div>
                            <div class="overflow-x-auto mt-2 dark:text-black">
                                <table className="table  ml-2">

                                    <thead className='border border-gray-500 rounded-xl'>
                                        <tr className='font-bold text-xl'>

                                            <th className='font-bold text-xl'>Flex Layout</th>
                                            <th className='font-bold text-xl'>Grid Layout</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-gray-400'>

                                            <td className='text-xl'>Flex layout  is made  one dimension layout</td>
                                            <td className='text-xl'>Grid is made for two dimension layout</td>
                                        </tr>

                                        <tr class="hover border border-gray-400">

                                            <td className='text-xl'>This means Flexbox can work on either row or columns at a time</td>
                                            <td className='text-xl'>Grids can work  on both.</td>

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

export default InterviewQuesAnsCSS;