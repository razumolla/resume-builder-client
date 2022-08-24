import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../../../src/assets/images/imgAfruza/css interview2.jpg';
const InterviewQuesAnsCSS = () => {
    return (
        <div className='mt-10 mb-96 '>
            <div className='flex flex-wrap justify-center '>
                <div className=' sm:mb-2'>
                    <Link to='/html' className='btn btn-primary ml-2 mb-2'>Html</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>CSS</Link>
                    <Link to='/js' className='btn btn-primary ml-2 mb-2'>JavaScript</Link>
                    <Link to='/reactjs' className='btn btn-primary ml-2 mb-2'>React JS</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>Mongo DB</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>Node JS</Link>
                    <Link to='/css' className='btn btn-primary ml-2 mb-2'>Redux</Link>
                </div>

            </div>
            <div className='dark:bg-cyan-900 bg-gray-300   lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>

                <h1 className='p-5 mt-4 sm:text-xl lg:text-3xl font-bold '> Most Common <span className='text-primary'>CSS</span> Interview Questions and Answers</h1>

                <div className='lg:flex justify-center sm:flex-cols'>
                    <div>
                        <img src={css} className='ml-16 mt-28  ' alt="" />
                    </div>

                    <div className='lg:m-10 sm:m-8 lg:p-5 sm:p-4 lg:w-1/2 sm:w-0'>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-left font-medium ">
                                Q-1: What is CSS?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood?
                                    This article explains what
                                    CSS is with a simple syntax example and also covers some key terms about the language.

                                </p>


                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-2: What are some differences between absolute position and relative position?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <h1>Position Absolute</h1>
                                <p>a. Absolute- the element is positioned absolutely to its first positioned parent.
                                </p>
                                <p>
                                    b. Absolute is the total of all existence.
                                </p>
                                <h1>Position Relative</h1>
                                <p>a. Relative the element is positioned relative to its normal position.
                                </p>
                                <p>
                                    b. Relative is always in proportion to a whole.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                3. What is a box model? And what are the different elements of a box model?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> Box Model: The CSS box model is a container that contains multiple properties including borders, margin, padding and the content itself.
                                    Border style: Border-right-style, Border-left-style, border-top-style, border-bottom-style, border-style.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-left font-medium ">
                                Q-4. Difference between transition and transform?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>The Transform property in CSS moves or modifies the appearance of an element, whereas the Transition property seamlessly and gently transitions the element from one state to another.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-5: What is a Pseudo element? Give an example of pseudo element?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>A CSS pseudo-element is used to style specified parts of an element. The syntax of pseudo-elements:
                                    Example: ::after, ::before, ::selection, ::first-line, ::first-letter etc.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-6: What is a CSS Preprocessor? What are some benefits of Sass?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> A CSS preprocessor is a program that lets you generate CSS from the preprocessor’s own unique syntax.
                                    Sass facilitates you to write clean, easy and less CSS in a programming construct, It is more stable. Powerful and elegant because it is an extension of CSS. So , it is easy for designers and developers to work more efficiently and quickly.

                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-left font-medium ">
                                Q-7: What is CSS Specificity?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> CSS specificity is an important topic to understand if you want to get better at CSS.It is the set of rules applied to CSS selectors that determines which style is applied to an element.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsCSS;