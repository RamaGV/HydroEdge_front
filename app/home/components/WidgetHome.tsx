// WidgetHome.tsx

import React from 'react';
import Link from 'next/link';

interface WidgetHomeProps {
  link: string;
  titulo: string;
  layout: string;
  icono: React.ReactNode;
  finalizado: boolean;
}

export default function WidgetHome({ link, titulo, layout, icono, finalizado }: WidgetHomeProps) {
  const content = (
    <div
      className={`
        flex flex-col items-start p-4 rounded-lg shadow-md
        bg-white dark:bg-gray-800
        transform transition-transform duration-200
        ${finalizado ? 'hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'}
      `}
    >
      <div className="mb-2 text-primary dark:text-primary-dark">{icono}</div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{titulo}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{layout}</p>
    </div>
  );

  return finalizado ? <Link href={link}>{content}</Link> : content;
}
