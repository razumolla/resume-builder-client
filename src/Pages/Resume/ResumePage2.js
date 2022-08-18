import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const ResumePage2 = ({ formData }) => {
    const {
        name,
        email,
        phone,
        city,
        education,
        institute,
        startDate,
        endDate,
        project,
        link,
        features,
        skills,
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
                    <div className='text-black  w-full'>
                        <div className='text-left'>
                            <h1 className='text-3xl font-semibold'>{name}</h1>


                            <p className='font-semibold'>Email:  {email}</p>
                            <p className='font-semibold'>Phone: {phone}</p>
                            <p className='font-semibold'>Address:  {city}</p>

                        </div>
                    </div>
                    <div className='text-left'>
                        <div className='dark:text-black'>
                            <div className='divider px-2 dark:text-black'></div>

                            <div className='mt-3'>
                                <h2 className='text-2xl font-bold '>Education</h2>
                                <p className='font-bold'>{education}</p>
                                <p className='font-semibold'>{institute}</p>
                                <p className=''><span className='font-bold'>Year:</span> {startDate} - {endDate}</p>
                            </div>

                            <div className='divider px-2 dark:text-black'></div>

                            <div className='mt-3'>
                                <h2 className='text-2xl font-bold'>Projects</h2>
                                <p className=''><span className='font-bold'>Project:</span>  {project}</p>
                                <p className=''><span className='font-bold'>Project LInk:</span>  {link}</p>

                                <p className='break-words'><span className='font-bold '>Describe Project:</span> <span className='px-2 '>{features}</span> </p>
                            </div>

                            <div className='divider px-2 dark:text-black'></div>

                            <div className="mt-3">
                                <h2 className="text-2xl font-bold">Skills</h2>
                                <p className=''><span className='font-bold'>My Skills:</span> {skills} </p>

                            </div>

                            <div className='divider px-2 dark:text-black'></div>

                            <div className="mt-3">
                                <h2 className="text-2xl font-bold">Language</h2>
                                <p className=''><span className='font-bold'>Language:</span> {language} </p>

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

export default ResumePage2;