// components/ProfileModal.tsx

import React from 'react';
import Image from 'next/image';
import { useUser } from '@/contexts/UserContext';

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const user = useUser();

  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo Oscuro */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Contenido del Modal */}
      <div className="relative bg-white rounded-lg p-6 max-w-sm w-full">
        {/* Botón de Cerrar */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
            <Image
                src={user.profileImageUrl}
                alt={user.name}
                width={32}
                height={32}
                className="rounded-full mb-4"
            />
          <h2 className="text-xl font-semibold text-gray-800">{user.name} {user.apellido}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
