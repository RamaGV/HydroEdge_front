// components/Tour.tsx

import React from 'react';
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride';

interface TourProps {
  onClose: () => void;
}

const Tour: React.FC<TourProps> = ({ onClose }) => {
  const steps: Step[] = [
    {
      target: '.TipWidget',
      content: 'Este es el tip para entender mejor HydroEdge.',
    },
    {
      target: '.WidgetHome',
      content: 'Estos son los diferentes widgets que puedes explorar.',
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      onClose();
    }
  };

  return (
    <Joyride
      steps={steps}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
    />
  );
};

export default Tour;