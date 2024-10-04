function RecetaItem({ name, stages }: { name: string; stages: number }) {
    return (
      <div className="flex items-center justify-between p-4 rounded-lg
        bg-gradient-to-br from-[#CFF5F4] to-background-light text-gray-700
        dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:text-white">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-400 rounded-full mr-4"></div>
          <span className="text-gray-800 font-medium">{name}</span>
        </div>
        <span className="text-gray-600">Fases: {stages}</span>
      </div>
    );
  }

export default RecetaItem