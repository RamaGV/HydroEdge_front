// /app/page.tsx

'use client';
import Home_lg from './home_lg/page';
import Home_md from './home_md/page';

export default function HomePage() {  
  return (
    <>
      <div className="hidden md:block">
          <Home_lg />
      </div>
      <div className="block md:hidden">
          <Home_md />          
      </div>
    </>
  );
}
