import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../../../src/assets/images/imgAfruza/banner-removebg-preview.png';
const InterviewQuesAnsMongoDB = () => {
    return (
        <div className='mt-10 '>
            <div className='flex flex-wrap justify-center mb-8'>
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

                <h1 className='p-5 text-xl md:text-2xl lg:text-3xl font-bold '> Most Common <span className='text-primary'>MongoDB</span> Interview Questions and Answers</h1>
                <div className='lg:flex'>
                   <div>
                        <img src={html} className='m-auto lg:mt-28' alt="" />
                    </div>
                    <div className='lg:m-10 sm:m-8  lg:p-5 sm:p-4 lg:w-1/2 p-8'>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-1: what is MongoDB ?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.

                                </p>

                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-2:Why we use MongoDB instead of MySQL?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Why is using MongoDB better than using MySQL? Organizations of all sizes are adopting MongoDB, especially as a cloud database, because it enables them to build applications faster, handle highly diverse data types, and manage applications more efficiently at scale.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-3: What is MongoDB explain features of MongoDB?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-4: What is the main advantage of MongoDB?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>MongoDB is designed to make data easy to access, and rarely to require joins or transactions, but when you need to do complex querying, it's more than up to the task. The MongoDB Query API allows you to query deep into documents, and even perform complex analytics pipelines with just a few lines of declarative code.
                                </p>


                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-5: What are limitations of MongoDB?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    The maximum BSON document size is 16 megabytes. The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth. To store documents larger than the maximum size, MongoDB provides the GridFS API.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-6: What are the data types in MongoDB?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:MongoDB - Datatypes
                                </p>
                                <p>
                                    String − This is the most commonly used datatype to store the data. ...
                                </p>
                                <p>
                                    Integer − This type is used to store a numerical value. ...
                                </p>
                                <p>
                                    Boolean − This type is used to store a boolean (true/ false) value.
                                </p>
                                <p>
                                    Double − This type is used to store floating point values.
                                </p>

                            </div>
                        </div>
                        <div tabindex="0" className="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div className="collapse-title text-xl text-left font-medium ">
                                Q-4:Can MongoDB store images?
                            </div>
                            <div className="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>So for storing an image in MongoDB, we need to create a schema with mongoose. For that create the file `model. js` file and define the schema. The important point here is that our data type for the image is a Buffer which allows us to store our image as data in the form of arrays
                                </p>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsMongoDB;