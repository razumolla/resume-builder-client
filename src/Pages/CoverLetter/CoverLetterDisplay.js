import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const CoverLetterDisplay = ({ formData, submitted }) => {
    const { 
        name,
        email,
        address,
        linkedin,
        phone,
        designation,
        dear,
        professionalCareer,
        achievements,
        characteristics ,
        signatureName
    
    } 
        = formData;
  

    const generatePdf = () => {
        const input = document.getElementById('coverLetter');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            })
            ;
    }

    return (
        <div className='my-10 mb-96 bg-gray-100 shadow-xl'>
            <div class="card  bg-gray-100  ">
                <div class="card-body text-left" id='coverLetter'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl font-semibold break-words'>{name}</h1>
                            <h1 className='text-xl font-semibold break-words'>{designation}</h1>
                        </div>
                        <div className='text-left'>
                            <small className='font-semibold break-words'><i class="fa-solid fa-envelope "></i> {email}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-solid fa-phone-flip "></i> {phone}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-solid fa-location-dot"></i> {address}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-brands fa-linkedin-in"></i> {linkedin}</small> <br />
                                                   
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div >
                        <h2 className='text-xl font-bold break-words'>{dear}</h2>
                        <p className='break-words'>{professionalCareer}
                        </p>
                    </div>
                    <div className='mt-3'>
                       <p className='break-words'> {achievements}</p>
                    </div>
                    <div className='mt-3'>
                        <p className=' break-words'>{characteristics}
                        </p>
                    </div>
                    <div className="mt-3 ">
                        <p className='text-xl break-words'>{ signatureName}</p>
                    </div>
                </div>              
            </div>
            <div className='py-4 ml-8'>
                    <button disabled={submitted == false}
                    
                    class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default CoverLetterDisplay;