import React from 'react';
import { Link } from 'react-router-dom';
import react from '../../../../src/assets/images/imgAfruza/react js.png';
const InterviewQuesAnsReactJS = () => {
    return (
        <div className='mt-10'>
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

            <div className='dark:bg-cyan-900 bg-gray-300  lg:mb-20 mb-14  lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>

                <h1 className='p-5 mt-4 sm:text-xl lg:text-3xl font-bold '> Most Common <span className='text-primary'>React JS </span> Interview Questions and Answers</h1>

                <div className='lg:flex'>
                    <div>
                        <img src={react} className='m-auto mb-5 mt-5  lg:mt-28 w-4/5 ' alt="" />
                    </div>
                    <div className='lg:m-10 sm:m-8 lg:p-5 p-4 lg:w-4/5 '>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-left font-medium ">

                                Q-1: What is React?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>React is an open-source front-end JavaScript library that is used for building user interfaces,
                                    especially for single-page applications. It is used for handling view layer for web and mobile apps.
                                    React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's
                                    News Feed in 2011 and on Instagram in 2012.</p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-2: What are the major features of React?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> 1. It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
                                </p>
                                <p> 2. It uses VirtualDOM inste Supports server-side rendering.
                                </p>
                                <p>3. Follows Unidirectional data flow or data binding.
                                </p>
                                <p>4.Uses reusable/composable UI components to develop the view.
                                </p>
                            </div>

                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                3. When to use a Class Component over a Function Component?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-left font-medium ">
                                Q-4. What are Pure Components?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-5: What is state in React?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.
                                    Let's create a user component with message state,
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title  text-left font-medium ">
                                Q-6: What are props in React?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p> Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.
                                    The primary purpose of props in React is to provide following component functionality:
                                    Pass custom data to your component.
                                    Trigger state changes.
                                    Use via this.props.reactProp inside component's render() method.
                                </p>
                            </div>
                        </div>

                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-left font-medium ">
                                Q-7: What are synthetic events in React?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>
                                    SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsReactJS;