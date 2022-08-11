import React from 'react';
import { Link } from 'react-router-dom';
import react from '../../../../src/assets/images/imgAfruza/React component1.png';
const InterviewQuesAnsReactJS = () => {
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
            <h1 className='p-5 mt-4 sm:text-xl lg:text-4xl font-bold '> Most Common <span className='text-primary'>React JS</span> Interview Questions and Answers</h1>
            <div className=' lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>

                <div className='text-left m-8   border-cyan-400 border p-3 py-7 border-spacing-4 rounded-xl  '>
                    <div>
                        <h1 className='text-xl font-bold'>1. What is React?</h1>
                        <p className='ml-6 text-xl'>React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.</p>
                    </div>

                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>2. What are the major features of React?</h1>
                        <p className='ml-6 text-xl font-bold'> The major features of React are:
                        </p>
                        <div className='ml-6'>
                            <p className='ml-6 text-xl'> 1. It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
                            </p>
                            <p className='ml-6 text-xl'>2. Supports server-side rendering.
                            </p>
                            <p className='ml-6 text-xl'>3. Follows Unidirectional data flow or data binding.
                            </p>
                            <p className='ml-6 text-xl'>4.Uses reusable/composable UI components to develop the view.
                            </p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>3. When to use a Class Component over a Function Component?</h1>
                        <p className='ml-6 text-xl'>If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>4. What are Pure Components?</h1>
                        <p className='ml-6 text-xl'>React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>5.What is state in React?</h1>
                        <p className='ml-6 text-xl'> State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

                            Let's create a user component with message state,
                            <img src={react} className='ml-28' alt="" />
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>6.What are props in React?</h1>
                        <p className='ml-6 text-xl'> Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

                            The primary purpose of props in React is to provide following component functionality:

                            Pass custom data to your component.
                            Trigger state changes.
                            Use via this.props.reactProp inside component's render() method.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>7.What are synthetic events in React?</h1>
                        <p className='ml-6 text-xl'> 
                        SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>8.What is the use of refs?</h1>
                        <p className='ml-6 text-xl'> 
                        The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>9.What is Virtual DOM?</h1>
                        <p className='ml-6 text-xl'> 
                        The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-xl font-bold'>10.What is React Fiber?</h1>
                        <p className='ml-6 text-xl'> 
                        Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default InterviewQuesAnsReactJS;