export default function DataCircle({
  label,
  value,
  unit,
  percentage,
  icon,
}: {
  label: string;
  value: number;
  unit: string;
  percentage: number;
  icon: React.ReactNode;
}) {
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-2">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke="#004D40"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke="#00C853"
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 44}`}
            strokeDashoffset={`${2 * Math.PI * 44 * (1 - validPercentage / 100)}`}
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold">{value}</span>
          <span className="text-sm">{unit}</span>
          {icon}
        </div>
      </div>
      <span className="text-[#00C853] font-medium">{label}</span>
    </div>
  );
}
