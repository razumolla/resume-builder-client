import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Paper = ({ formData, submitted }) => {
    const {
        name,
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
        skillOne,
        skillTwo,
        designation,
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
            <div className=" w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div className="text-left" id='cv'>
                    <div className='bg-accent'>
                        <div className='p-3 text-white'>
                            <h1 className='text-3xl font-semibold break-words'>{name}</h1>
                            <h2 className='text-xl font-semibold '>{designation}</h2>
                            <p className='font-semibold break-words'>Email: {email}</p>
                            <p className='font-semibold break-words'>Phone: {phone}</p>
                            <p className='font-semibold break-words'>Address: {city}</p>
                        </div>
                    </div>
                    <div className='m-5 pb-5 dark:text-black'>
                        <div className=''>
                            <h2 className='text-2xl font-bold'>Summary</h2>
                            <p className='max-w-lg break-words w-full'>{summary}</p>
                        </div>

                        <div className='divider bg-accent mt-5' style={{ height: '1px' }}></div>

                        <div className='mt-5'>
                            <h2 className='text-2xl font-bold'>Education</h2>
                            <p className='break-words'><span className='font-semibold'>Education:</span> {education}</p>
                            <p className='break-words'><span className='font-semibold'>University/College Name:</span> {university}</p>
                            <p className='break-words'><span className='font-semibold'>Year:</span> {startDate} - {endDate}</p>
                        </div>

                        <div className='divider bg-accent mt-5' style={{ height: '1px' }}></div>

                        <div className='mt-5'>
                            <h2 className='text-2xl font-bold'>Projects</h2>
                            <p className='break-words'><span className='font-semibold '>Your Best Project:</span>  {projectName}</p>
                            <p className='break-words'><span className='font-semibold'>Project Live Link:</span>  {projectLink}</p>
                            <p className='break-words'><span className='font-semibold'>Describe Your Project:</span>  {projectDescription}</p>
                        </div>

                        <div className='divider bg-accent mt-5' style={{ height: '1px' }}></div>

                        <div className="mt-5">
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className='break-words'><span className='font-semibold'>Skill-1:</span> {skillOne} </p>
                            <p className='break-words'><span className='font-semibold'>Skill-2:</span> {skillTwo} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    disabled={submitted == false}
                    className="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default Paper;