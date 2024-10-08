// pages/Pedido.tsx
import React from 'react';
import Header_lg from '@/components/Header_lg';
import Home_md from '@/app/home_md/page';

const Prueba: React.FC = () => {
  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#081C3A] text-white  flex flex-col items-center text-center font-sans">
        <section className="flex flex-row items-center mt-8">
          <h1 className="text-4xl font-bold mb-4 text-green-500">Realiza tu Pedido</h1>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl">
            Puedes realizar tu pedido online a través de nuestra aplicación personalizada, que permite una experiencia de usuario amigable, fácil y eficiente. A continuación puedes ver un ejemplo de la interfaz que utilizamos.
          </p>

          {/* Imagen del celular con el componente dentro */}
          <div className="relative w-full max-w-md h-[600px]">

            <div className="absolute inset-10 flex  justify-center">
              {/* Componente HomeMD cargado en el centro */}
              <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl  bg-gradient-to-br from-[#0A2540] via-[#081C3A] to-green-500
                 ">
                <Home_md />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prueba;
