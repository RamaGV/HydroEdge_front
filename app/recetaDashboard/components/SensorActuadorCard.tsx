interface SensorActuadorCardProps {
  nombre: string;
  umbral_min?: number;
  umbral_max?: number;
  hora_encendido?: string[];
  duracion?: number;
  tipo: 'sensor' | 'actuador';
  actuadores_vinculados?: { nombre: string }[]; // Array de objetos con actuadores vinculados
}

function SensorActuadorCard({ nombre, umbral_min, umbral_max, hora_encendido, duracion, tipo, actuadores_vinculados }: SensorActuadorCardProps) {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          {/* Mostrar Umbrales si es un sensor */}
          <p className="text-sm text-red-200">Umbrales</p>
          {tipo === 'sensor' && (
            <p className="font-medium">
              {umbral_min} - {umbral_max}
            </p>
          )}

          {/* Mostrar hora de encendido y duración si es un actuador */}
          {tipo === 'actuador' && (
            <p className="font-medium">
              {hora_encendido?.join(', ')} | {duracion} min
            </p>
          )}
        </div>
        <div>
          {/* Mostrar Actuadores vinculados si es un sensor */}
          <p className="text-sm text-red-200">{tipo === 'sensor' ? 'Actuadores vinculados' : 'Activaciones'}</p>

          {/* Si hay actuadores vinculados, mostrarlos como etiquetas; si no, mostrar "Ninguno" */}
          {tipo === 'sensor' ? (
            actuadores_vinculados && actuadores_vinculados.length > 0 ? (
              <div className="flex space-x-2">
                {actuadores_vinculados.map((actuador, index) => (
                  <div key={index} className="bg-gray-600 text-white text-sm px-2 py-1 rounded-full">
                    {actuador.nombre}
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-medium">Ninguno</p>
            )
          ) : (
            <p className="font-medium">
              {hora_encendido?.length} activaciones
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SensorActuadorCard;
