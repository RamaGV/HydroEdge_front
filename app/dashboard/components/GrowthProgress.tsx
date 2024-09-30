import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface GrowthProgressProps {
  daysPassed: number;
  totalDays: number;
}

const GrowthProgress: React.FC<GrowthProgressProps> = ({ daysPassed, totalDays }) => {
  const percentage = (daysPassed / totalDays) * 100;

  // Determinar la etapa de crecimiento
  let growthStage = '🌱'; // Inicial
  if (percentage >= 25 && percentage < 50) {
    growthStage = '🌿'; // Creciendo
  } else if (percentage >= 50 && percentage < 75) {
    growthStage = '🌳'; // Medio crecimiento
  } else if (percentage >= 75) {
    growthStage = '🍎'; // Fruto
  }

  return (
    <div className="flex flex-col items-center dark:bg-gray-800 p-2">
      <div className="w-32 h-32 mb-4">
        <CircularProgressbar
          value={percentage}
          maxValue={100}
          text={growthStage}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: 'round',
            trailColor: '#e0e0e0',
            pathColor: '#00C853',
            textColor: '#00C853',
          })}
          circleRatio={0.75}
        />
      </div>
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Día {daysPassed} de {totalDays}
      </p>
    </div>
  );
};

export default GrowthProgress;
