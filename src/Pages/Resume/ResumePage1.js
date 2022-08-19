import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const ResumePage1 = ({ formData }) => {
    const {
        name,
        title,
        email,
        phone,
        city,
        education,
        institute,
        year,
        project,
        link,
        features,
        project2,
        link2,
        features2,
        skills,
        technology,
        language,

    } = formData


    const generatePdf = () => {
        const input = document.getElementById('cv');
        html2canvas(input, {
            quality: 4,
            scale: 5
        }).then(canvas => {
            // Few necessary setting options
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            alert(imgHeight)
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('new-file.pdf');
            // window.open(pdf.output('bloburl', { filename: 'new-file.pdf' }), '_blank');
        });

    }
    return (
        <div className='my-10'>
            <div class="w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div class="card-body" id='cv'>
                    <div className='flex  w-full  bg-slate-600'>
                        <div className='text-left p-2'>
                            <div className='text-white'>
                                <h1 className='text-2xl text-white font-semibold '>{name}</h1>
                                <h1 className='text-lg  uppercase'>{title}</h1>
                            </div>

                            <div className='text-white'>
                                <p className='font-semibold mt-3'>{city}</p>
                                <p className='font-semibold'>{phone}</p>
                                <p className='font-semibold'>{email}</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-left flex p-2 w-full)'>
                        <div className='dark:text-black w-3/4 pr-2'>
                            <div className='divider px-2 dark:text-black'></div>

                            <div className=''>
                                <h2 className='text-xl text-slate-600 font-semibold uppercase mb-2'>Projects</h2>
                                <div className='flex'>
                                    <p className=''><span className='font-semibold'>1. </span>
                                        <span className='font-semibold'>{project}</span></p>
                                    <p className=''><span className='font-semibold'>Link:</span>  {link}</p>
                                </div>

                                <p className='break-words mt-2'><span className='font-semibold'>Describe Project <br /></span>  {features}</p>
                            </div>

                            <div className='mt-3'>

                                <div className='flex'>
                                    <p className=''><span className='font-semibold'>2. </span>
                                        <span className='font-semibold'>{project2}</span></p>
                                    <p className=''><span className='font-semibold'>Link:</span>  {link2}</p>
                                </div>

                                <p className='break-words mt-2'><span className='font-semibold'>Describe Project <br /></span>  {features2}</p>
                            </div>


                            <div className='divider px-2 dark:text-black'></div>

                            <div className=''>
                                <h2 className='text-xl text-slate-600 font-semibold uppercase mb-2'>Education</h2>
                                <p className='font-semibold'>{education}</p>
                                <p className=''>{institute}</p>
                                <p className=''><span className=''>Passing Year </span> <span className=''>{year}</span> </p>
                            </div>


                            {/* <div className='divider px-2 dark:text-black'></div> */}


                        </div>


                        <div className='w-1/4 bg-slate-600 text-white pl-2'>
                            <div className="pt-5">
                                <h2 className="text-xl  font-semibold uppercase pb-2">Skills</h2>
                                <p className='dark:text-black'><span className='font-semibold'>My Skills <br /> </span> {skills} </p>
                                <p className='dark:text-black mt-3'><span className='font-semibold'>Technologies <br /> </span> {technology} </p>

                            </div>
                            <div className='divider px-2 dark:text-black'></div>

                            <div className="">
                                <h2 className="text-xl font-semibold uppercase mb-2">Language</h2>
                                <p className='dark:text-black'><span className='font-semibold'>Language <br /></span> {language} </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>

                <button
                    // disabled={submitted == false}
                    class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>
                    Download PDF</button>
            </div>
        </div >
    );
};

export default ResumePage1;
