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
    <div className="flex flex-col items-center p-4 rounded-lg 
      shadow-xl justify-between hover:shadow-md transition
      bg-gradient-to-br from-card-light to-card-light_
      dark:bg-gradient-to-br dark:from-card-dark dark:to-card-dark_"
      style={{ height: '180px', width: '90px' }}>
      <div className="bg-primary rounded-full p-3 mb-2 text-white shadow-md">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      <span className="text-sm  text-gray-800 dark:text-gray-200">{label}</span>
      <div className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${
          is_active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
        {is_active ? 'On' : 'Off'}
      </div>
    </div>
  );
}
2