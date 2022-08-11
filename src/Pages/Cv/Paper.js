import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Paper = ({ formData }) => {
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
        summary
    } = formData

    // console.log(formData);
    const generatePdf = () => {
        const input = document.getElementById('cv');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }
    return (
        <div className='my-10'>
            <div className="card w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div className="card-body text-left" id='cv'>
                    <div>
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        <p className='font-semibold'>Email: {email}</p>
                        <p className='font-semibold'>Phone: {phone}</p>
                        <p className='font-semibold'>Address: {city}</p>

                    </div>
                    <div>
                        <div className='divider px-2'></div>
                        <div>
                            <h2 className='text-2xl font-bold'>Summary</h2>
                            <p>{summary}</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl font-bold'>Education</h2>
                            <p className=''><span className='font-bold'>Education:</span> {education}</p>
                            <p className=''><span className='font-bold'>University/College Name:</span> {university}</p>
                            <p className=''><span className='font-bold'>Year:</span> {startDate} - {endDate}</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl font-bold'>Projects</h2>
                            <p className=''><span className='font-bold'>Your Best Project:</span>  {projectName}</p>
                            <p className=''><span className='font-bold'>Project Live Link:</span>  {projectLink}</p>
                            <p className=''><span className='font-bold'>Describe Your Project:</span>  {projectDescription}</p>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className=''><span className='font-bold'>Skill-1:</span> {skillOne} </p>
                            <p className=''><span className='font-bold'>Skill-2:</span> {skillTwo} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default Paper;