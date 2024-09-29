function RecetaItem({ name, stages }: { name: string; stages: number }) {
    return (
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-400 rounded-full mr-4"></div>
          <span className="text-gray-800 font-medium">{name}</span>
        </div>
        <span className="text-gray-600">Fases: {stages}</span>
      </div>
    );
  }

export default RecetaItem