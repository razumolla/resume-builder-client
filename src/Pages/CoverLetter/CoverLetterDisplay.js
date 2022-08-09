import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const CoverLetterDisplay = ({ formData }) => {
    const{name,email,address, phone,designation,dear,professionalCareer, achievements,characteristics}=formData;
    // console.log(form);
   
    const generatePdf = () => {
        const input = document.getElementById('coverLetter');
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.sav('download.pdf');
        })
    }

    return (
        <div className='my-10 mb-96 '>
            <div class="card  bg-gray-100 shadow-xl ">
                <div class="card-body text-left" id='coverLetter'>
                  <div className=' p-3  '>
                   <div>
                   <h1 className='text-3xl font-semibold'>{name}</h1>
                    <h1 className='text-xl font-semibold'>{designation}</h1>
                   </div>
                    <div className='text-left'>
                    <small className='font-semibold'>{email}</small> <br/>
                    <small className='font-semibold'>{phone}</small> <br/>
                    <small className='font-semibold'>{address}</small> <br/>
                    {/* <small className='font-semibold'>{dear}</small> <br/> */}
                    <div className='divider px-3'></div>
                    </div>
                  </div>
                   
                    <div >
                        <h2 className='text-xl font-bold'>{dear}</h2>
                        <p>{professionalCareer}
                        </p>
                    </div>
                    <div className='mt-3'>
                       {achievements}

                    </div>
                    <div className='mt-3'>
                        
                        <p className=''>{characteristics}

                          </p>
                    </div>
                    <div className="mt-3 ">
                        {/* <h2 className="text-xl font-bold">Afruza Akter Sonia</h2> */}
                        
            
                    </div>
                </div>
                <div className='mb-16'>
                <button class="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
            </div>
           
        </div >
    );
};

export default CoverLetterDisplay;