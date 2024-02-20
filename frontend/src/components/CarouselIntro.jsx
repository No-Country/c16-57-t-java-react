import { useEffect, useState } from 'react';

const CarouselIntro = ({
  paragraphs,
  intervalMs = 2500,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  /* Autoavance del carrusel */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % paragraphs.length);
    }, intervalMs); 

    return () => clearInterval(interval);
  }, [intervalMs, paragraphs]);
  
  // const handleNextStep = () => {
  //   setCurrentStep((prevStep) => Math.min(prevStep + 1, paragraphs.length - 1));
  // };

  // const handlePrevStep = () => {
  //   setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  // };

  // const isLastStep = currentStep === paragraphs.length - 1;

  return (
    <>
      <div className= 'flex flex-row items-start justify-center w-full h-24 text-center carousel '>
        {/* {currentStep !== 0 
          &&  
          <button 
            onClick={handlePrevStep} 
            disabled={currentStep === 0}
            className="fixed p-2 text-sm transform -translate-y-1/2 bg-white rounded-full shadow-md left-4"
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left-line" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#095012" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" />
  <path d="M21 15v-6" />
</svg>
          </button>} */}
          
          <div id={currentStep} className="justify-center w-full carousel-item">
            <p className={'text-lg font-light leading-tight text-balance' }>
              {paragraphs[currentStep]}
            </p>
          </div> 
        
        <div>
         {/*  {!isLastStep && <button 
          onClick={handleNextStep} 
          disabled={currentStep === paragraphs.length - 1}
          className='fixed p-2 text-sm transform -translate-y-1/2 bg-white rounded-full shadow-md right-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-line" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#095012" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z" />
  <path d="M3 9v6" />
</svg>
          </button>
          } */}
        </div>
         
        
      </div>
    </>
  );
};

export default CarouselIntro;