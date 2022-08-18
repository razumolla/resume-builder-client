import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const CoverLetterDisplayTwo = ({ formData, submitted }) => {
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
        <div className='my-10 mb-96 p-3 '>
            <div class=" w-full md:w-4/5 bg-base-100 shadow-xl mx-auto ">
                <div class="text-left" id='coverLetter'>
                    <div className='bg-blue-600 p-5 text-white flex justify-between'>
                        <div>
                            <h1 className='text-4xl font-semibold break-words'>{name}</h1>
                            <h1 className='text-2xl font-semibold break-words'>{designation}</h1>
                        </div>
                        <div className='text-left'>
                            <small className='font-semibold break-words'><i class="fa-solid fa-envelope "></i>  {email}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-solid fa-phone-flip "></i>  {phone}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-solid fa-location-dot"></i>  {address}</small> <br />
                            <small className='font-semibold break-words'><i class="fa-brands fa-linkedin-in"></i> {linkedin}</small> <br />
                                                   
                        </div>
                    </div>
                    <div className='divider'></div>
                   <div className='p-3'>
                   <div >
                        <h2 className='text-2xl font-bold break-words mb-6'>{dear}</h2>
                        <p className='break-words text-xl'>{professionalCareer}
                        </p>
                    </div>
                    <div className='mt-3'>
                       <p className='break-words text-xl'> {achievements}</p>
                    </div>
                    <div className='mt-3 mb-16'>
                        <p className=' break-words text-xl'>{characteristics}
                        </p>
                    </div>
                    <div className="mt-3 ">
                        <p className='text-xl break-words'>{ signatureName}</p>
                    </div>
                   </div>
                </div>              
            </div>
            <div className='py-4 ml-8'>
                    <button disabled={submitted === false}
                    
                    class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default CoverLetterDisplayTwo;