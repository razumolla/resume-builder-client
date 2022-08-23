import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../../../src/assets/images/imgAfruza/redux interview banner.jpg';
const InterviewQuesAnsRedux = () => {
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
            <div className='bg-gray-300   lg:m-10 lg:ml-16 lg:mr-16 sm:m-0 sm:ml-0 sm:mr-0'>
                <h1 className='p-5 text-3xl font-bold '> Most Common <span className='text-primary'>Redux</span> Interview Questions and Answers</h1>
                <div className='lg:flex justify-center sm:flex-cols'>

                    <div className='lg:m-10 sm:m-8 lg:p-5 sm:p-4 lg:w-1/2 sm:w-0'>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-1: What is Redux & why Redux? ?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>A small JS Library
                                    for managing medium/large amount of states globally in your app.
                                    useContext + useReducer Hook ideas will help you to understand redux.

                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-2: How redux works?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>a. define state.       
                                </p>
                                <p>
                                b. dispatch an Action.
                                </p>
                                <p>
                                c. Reducer update state based on Action Type.
                                </p>
                                <p>
                                d. store will update the view
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-3: Some common terms related to redux?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                            <p>a. React-redux: redux is used with some common packages such as react-redux.       
                                </p>
                                <p>
                                b. redux-toolkit : recommended way to write redux logic for building redux app easily and avoiding mistakes.
                                </p>
                                <p>
                                c. redux devtools extension: helps to debug redux app easily.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-4: What is Redux in React js?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>Redux in React is the official React binding for Redux which allows the components in React to read data from a Redux Store, and dispatch Actions to the Store for updating the data. The purpose of Redux is to help applications scale well by providing means to manage the state via a unidirectional data flow model.
                                </p>                              
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-5: What are reducers in Redux's architecture?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state. 
                                </p>
                               
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-6: What is the mental model of redux saga?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>Redux Saga functions as a separate thread in our programme which is solely responsible for side effects. Redux Saga is a redux middleware. In other words, it means that it can be started, paused, and aborted from the main application using standard Redux actions, has access to the entire Redux application state, and can also dispatch Redux actions
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-7: What do you understand about Redux Thunk?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>Using Redux Thunk middleware, we can write action creators returning a function instead of an action. This thunk can postpone the dispatch of an action, or do conditional dispatchment. The arguments passed to the inner function are the store methods dispatch and getState(). In the event of an action creator returning a function, the function gets executed by the Redux Thunk middleware and it does not have to be pure. In other words, the function is allowed to have side effects, including executing asynchronous API calls. It can even dispatch actions. Redux thunk is used to delay the dispatch of an action, or to dispatch in the event of a certain condition being met. At the time of dispatch of a function instead of an action object, if Redux Thunk middleware is enabled, the middleware will call that function with the dispatch method itself as the first argument
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={html} className=' mr-8 mt-24' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsRedux;