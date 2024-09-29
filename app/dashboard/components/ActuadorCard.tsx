import React, { useState } from 'react';

interface ActuadorCardProps {
  icon: React.ReactNode;
  label: string;
  is_active: boolean;
  onClick?: () => void;
}

export default function ActuadorCard({ icon, label, is_active }: ActuadorCardProps) {
  
  if (!React.isValidElement(icon)) {
    return null;
  }
  
  const clonedIcon = React.createElement(icon.type, { className: 'w-8 h-8 text-[#00C853]' }, icon.props.children);
  
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 hover:shadow-md transition">
      <div className="bg-primary rounded-full p-3 mb-2 text-white">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{label}</span>
      <div
        className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${
          is_active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}
      >
        {is_active ? 'On' : 'Off'}
      </div>
    </div>
  );
}
