// layout.tsx

'use client';

import { UserProvider } from '@/contexts/UserContext';
import { CultivoProvider } from '@/contexts/CultivoContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HeaderProvider } from '@/contexts/HeaderContext';
import { SidebarProvider } from '@/contexts/SidebarContext'; 
import { RecetaProvider } from '@/contexts/RecetaContext';
import { AccountProvider } from '@/contexts/AccountContext';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url('/fondo.webp')] bg-cover bg-center bg-no-repeat `}>
          <ThemeProvider>
            <RecetaProvider>
              <CultivoProvider>
                <UserProvider>
                  <HeaderProvider>
                    <SidebarProvider>
                      <AccountProvider>
                      <div className="hidden md:block">
                        {children}
                      </div>
                      <div className="block md:hidden">
                        <Header />
                        {children}
                        <Footer />
                      </div>
                      </AccountProvider>
                    </SidebarProvider>
                  </HeaderProvider>
                </UserProvider>
              </CultivoProvider>
            </RecetaProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
