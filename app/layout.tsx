// layout.tsx

'use client';

import { UserProvider } from '@/contexts/UserContext';
import { CultivoProvider } from '@/contexts/CultivoContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HeaderProvider } from '@/contexts/HeaderContext';
import { SidebarProvider } from '@/contexts/SidebarContext'; 
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CultivoProvider>
            <UserProvider>
              <HeaderProvider>
                <SidebarProvider>
                  <Header />
                  {children}
                  <Footer />
                </SidebarProvider>
              </HeaderProvider>
            </UserProvider>
          </CultivoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
