import React from 'react';
// import './Resume.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const ResumePage = ({ formData }) => {
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
        features,
        skills

    } = formData

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
            <div class="card w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div class="card-body text-left" id='cv'>
                    <div>
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        <p className='font-semibold'>Email: {email}</p>
                        <p className='font-semibold'>Phone: {phone}</p>
                        <p className='font-semibold'>Address: {city}</p>

                    </div>
                    <div>
                        <div className='divider px-2'></div>

                        <div className='mt-3'>
                            <h2 className='text-2xl font-bold'>Education</h2>
                            <p className='font-bold'>{education}</p>
                            <p className='font-semibold'>{institute}</p>
                            <p className=''><span className='font-bold'>Year:</span> {startDate} - {endDate}</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl font-bold'>Projects</h2>
                            <p className=''><span className='font-bold'>Your Best Project:</span>  {project}</p>

                            <p className=''><span className='font-bold'>Describe Your Project:</span>  {features}</p>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className=''> {skills} </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Download PDF</button>
            </div>
        </div >
    );
};

export default ResumePage;