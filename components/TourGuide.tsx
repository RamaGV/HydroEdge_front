// components/TourGuide.tsx

import React, { useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useTour } from '@/contexts/TourContext';

const TourGuide: React.FC = () => {
  const { currentStep, setCurrentStep, isTourRunning, setIsTourRunning } = useTour();

  const steps: Step[] = [
    {
      target: '.dashboard-link',
      content: 'Haz clic en el Dashboard para continuar con el tour.',
    },
    {
      target: '.widget-selector',
      content: 'Este es el widget que ayuda a automatizar el cultivo.',
    },
    // Más pasos...
  ];

  useEffect(() => {
    if (currentStep === 0 && isTourRunning) {
      // Redirigir al usuario al Dashboard si el tour está en ejecución
      const dashboardLink = document.querySelector('.dashboard-link');
      if (dashboardLink) {
        (dashboardLink as HTMLElement).click();
      }
    }
  }, [currentStep, isTourRunning]);

  const handleTourCallback = (data: CallBackProps) => {
    const { status, index } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setIsTourRunning(false);
      setCurrentStep(0);
    } else {
      setCurrentStep(index);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={isTourRunning}
      stepIndex={currentStep}
      continuous={true}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleTourCallback}
      styles={{
        options: {
          arrowColor: '#e3ffeb',
          backgroundColor: '#e3ffeb',
          overlayColor: 'rgba(79, 26, 0, 0.4)',
          primaryColor: '#000',
          textColor: '#004a14',
          width: 300,
          zIndex: 1000,
        },
      }}
    />
  );
};

export default TourGuide;