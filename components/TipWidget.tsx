// /components/TipWidget.tsx
import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
export default function TipWidget() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <div className="text-white bg-gradient-to-b from-complementary to-#004D40 rounded-lg p-4  col-span-2 flex flex-col items-center">
                <div className="flex items-center mb-2">
                    <h2 className="text-lg font-semibold">¡Conoce sobre HydroEdge!</h2>
                </div>
                <button 
                    className="w-1/3 bg-primary py-2 px-4 rounded-lg text-sm font-medium hover:opacity-80"
                    onClick={toggleModal}
                    >
                    Show Tip
                </button>
            </div>
            
            {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
                <h2 className="text-xl font-bold mb-4">Consejos de HydroEdge</h2>
                <p>
                    Proximamente se agregaran consejos.
                </p>
                <button
                    className="mt-4 bg-[#4CD964] text-white px-4 py-2 rounded"
                    onClick={toggleModal}
                >
                    Cerrar
                </button>
                </div>
            </div>
            )}
        </>
    );
  }
  