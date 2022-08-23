import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../../../src/assets/images/imgAfruza/html interview.png';
const InterviewQuesAnsHtml = () => {
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
                <h1 className='p-5 text-3xl font-bold '> Most Common <span className='text-primary'>HTML</span> Interview Questions and Answers</h1>
                <div className='lg:flex justify-center sm:flex-cols'>
                    <div>
                        <img src={html} className=' w-10/12 ml-5 mt-16' alt="" />
                    </div>
                    <div className='lg:m-10 sm:m-8 lg:p-5 sm:p-4 lg:w-1/2 sm:w-0'>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-1: What are the differences between  Html4 and Html5 ?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Html4:
                                    Html4 is the Fourth iteration of Html
                                    These tags are not available in Html4
                                    Multimedia supporting tags are not available
                                    Length Doctype declaration

                                </p>
                                <p>Html5:
                                    Html5 is the fifth iteration of Html - an update over Html4
                                    Comes with new Html tags, including audio , video,header,footer, canvas, article and more.
                                    Multimedia supporting tags are available
                                    Simple Doctype declaration


                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-2: What are semantic tags in html? Give me some examples?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>A semantic tag in html clearly describes its meaning to both the browser  and the developer.
                                    Give me some examples:
                                    header, nav , main,  article,  section,  aside and footer
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-3: Why will you use Meta tag?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    The meta tag define metadata about an Html document.Metadata is  information about data. meta tags always go inside the head element, and  are  usually used to specify character set, page description, keywords, author of the document, and viewport settings.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-4: What is the difference between inline, inline-block, and block?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2">
                                <p>Inline:
                                    Respect left and right margins and padding,but not top and bottom cannot have a width and height set.
                                </p>
                                <p>Block:
                                    Respect all of those.
                                    Forse a line break after the line block element acquires full-width if width not defined.
                                </p>
                                <p>Inline-block:
                                    Allow other elements to set to their left and right respect top and bottom margins and padding respect height and width.
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-5: What are properties and attributes in Html?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    All Html  elements can have attributes.Attributes provide additional information about elements. Attributes are always specified in the start tag.
                                    Html attributes: The href, src, width, height, alt, style, lang, title attribute
                                </p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-6: What is a Viewport?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Answer:
                                    Hyperlink: alternatively referred to as a link and web link, a hyperlink is an icon, graphic, or text that links to another file or object.
                                    a tag  used  for hyperlink.

                                </p>

                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border   border-base-300 bg-base-100 rounded-box dark:bg-cyan-900">
                            <div class="collapse-title text-xl text-left font-medium ">
                                Q-4: What is the difference between inline, inline-block, and block?
                            </div>
                            <div class="collapse-content text-left border-spacing-3 bg-gray-300 m-2 dark:bg-cyan-900">
                                <p>Inline:
                                    Respect left and right margins and padding,but not top and bottom cannot have a width and height set.
                                </p>
                                <p>Block:
                                    Respect all of those.
                                    Forse a line break after the line block element acquires full-width if width not defined.
                                </p>
                                <p>Inline-block:
                                    Allow other elements to set to their left and right respect top and bottom margins and padding respect height and width.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuesAnsHtml;