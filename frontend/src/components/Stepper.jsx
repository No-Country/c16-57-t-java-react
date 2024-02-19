import { useEffect, useState } from 'react';

export const paragraphs = [
'Bienvenid@ al mejor lugar donde se encuentran vendedores y compradores de productos orgánicos',
'Conectate con el proveedor más cercano a vos, o el que vos quieras',
'Vende tus productos a más personas',
'Seleccioná, pedí, pagá',
'Producí, almacená, vendé, Cobrá',
'Sin vueltas...'
];
export const Stepper = () => {

  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % paragraphs.length);
    }, 2500); // Cambia el valor a la cantidad de milisegundos que desees entre cada cambio de frase

    return () => clearInterval(interval);

    // Dependencia vacía para que el efecto se ejecute solo una vez al montar el componente
  }, []);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, paragraphs.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const isLastStep = currentStep === paragraphs.length - 1;

  return (
    <>
      <div className= 'flex flex-row justify-center w-full text-center carousel '>
        {currentStep!==0 &&  <button 
          onClick={handlePrevStep} 
          disabled={currentStep === 0}
          className="fixed p-2 text-sm transform -translate-y-1/2 bg-white rounded-full shadow-md left-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left-line" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#095012" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" />
  <path d="M21 15v-6" />
</svg>
          </button>}
          <div id={currentStep} className="justify-center w-full carousel-item">
        <p className={' font-custom text-lg md:text-2xl lg:text-3xl text-green-700 p-10' }>
          {paragraphs[currentStep]}
        </p>
    
   
  </div> 
        
        <div>
          {!isLastStep && <button 
          onClick={handleNextStep} 
          disabled={currentStep === paragraphs.length - 1}
          className='fixed p-2 text-sm transform -translate-y-1/2 bg-white rounded-full shadow-md right-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-line" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#095012" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z" />
  <path d="M3 9v6" />
</svg>
          </button>
          }
        </div>
         
        
      </div>
    </>
  );
};