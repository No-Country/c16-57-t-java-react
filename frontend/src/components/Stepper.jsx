import { useState } from 'react';
import { Boton } from './Boton';

export const Stepper = () => {
    const paragraphs = [
    'Bienvenid@ al mejor lugar para conseguir tus alimentos orgánicos',
    'Conectate con el proveedor más cercano a vos, o el que vos quieras',
    'Seleccioná, pedí, pagá',
    'Sin vueltas...'
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, paragraphs.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const isLastStep = currentStep === paragraphs.length - 1;

  return (
    <>
      <div className="w-full text-center transition-opacity">
        <p className={`text-2xl md:text-4xl lg:text-5xl text-green-700 opacity-${currentStep === paragraphs.length - 1 ? '100' : '0'}`}>
          {paragraphs[currentStep]}
        </p>
        <div className="flex justify-center mt-4 gap-x-5">
          <button onClick={handlePrevStep} disabled={currentStep === 0}>
            &#8592; Anterior
          </button>
          <button onClick={handleNextStep} disabled={currentStep === paragraphs.length - 1}>
            Siguiente &#8594;
          </button>
        </div>
        {isLastStep ? (
          <div  className="text-center flex items-center gap-x-6">
              <Boton texto="Comprar" to="/homecomprador" />
              <Boton texto="Vender " to="/homevendedor" />

          </div>
        ) : (
            
         ""
        )}
      </div>
    </>
  );
};