import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

const PaperTwo = ({ formData, submitted }) => {
    const {
        name,
        designation,
        email,
        phone,
        city,
        education,
        university,
        startDate,
        endDate,
        projectName,
        projectLink,
        projectDescription,
        technicalSkill,
        softSkill,
        language,
        summary
    } = formData

    // console.log(formData);
    const generatePdf = () => {
        const input = document.getElementById('cv');
        html2canvas(input, {
            quality: 4,
            scale: 5
        }).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
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
            <div class=" w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div class="text-left" id='cv'>
                    <div className=''>
                        <div className='p-3'>
                            <h1 className='text-3xl font-semibold break-words text-red-900'>{name}</h1>
                            <h1 className='text-xl font-semibold break-words text-red-900'>{designation}</h1>
                            <div className='divider bg-red-900 mt-1' style={{ height: '2px' }}></div>
                            <div className='flex gap-4 dark:text-black'>
                                <p className='font-semibold break-words'>Email: {email}</p>
                                <p className='font-semibold break-words'>Phone: {phone}</p>
                                <p className='font-semibold break-words'>Address: {city}</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-5 pb-5 dark:text-black'>
                        <div className=''>
                            <h2 className='text-2xl font-bold text-red-900'>Summary</h2>
                            <p className='max-w-lg break-words w-full'>{summary}</p>
                        </div>

                        <div className='mt-5'>
                            <h2 className='text-2xl font-bold text-red-900'>Education</h2>
                            <p className='break-words'><span className='font-semibold'>Education:</span> {education}</p>
                            <p className='break-words'><span className='font-semibold'>University/College Name:</span> {university}</p>
                            <p className='break-words'><span className='font-semibold'>Year:</span> {startDate} - {endDate}</p>
                        </div>

                        <div className='mt-5'>
                            <h2 className='text-2xl font-bold text-red-900'>Projects</h2>
                            <div className=''>
                                <p className='break-words'><span className='font-semibold '>Your Best Project:</span>  {projectName}</p>
                                <p className='break-words'><span className='font-semibold '>Your Best Project:</span> {projectLink}</p>
                            </div>
                            <p className='break-words'><span className='font-semibold'>Project Details:</span>  {projectDescription}</p>
                        </div>

                        <div className="mt-5">
                            <h2 className="text-2xl font-bold text-red-900">Skills</h2>
                            <p className='break-words'><span className='font-semibold'>technicalSkill:</span> {technicalSkill} </p>
                            <p className='break-words'><span className='font-semibold'>softSkill:</span> {softSkill} </p>
                        </div>

                        <div className="mt-5">
                            <h2 className="text-2xl font-bold text-red-900">Language</h2>
                            <p className='break-words'><span className='font-semibold'>Language:</span> {language} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    disabled={submitted == false}
                    class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default PaperTwo;