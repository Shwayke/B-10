// layout.tsx
// Import React and necessary components and styles
import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';
import DarkLightProvider from './components/DarkLightProvider';
import { styleClasses } from  '@/Utils/tailwindClasses';

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Artify', // Application title
  description: 'Art exhebition market-place', // Application description
};

// Define the RootLayout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Wrap the layout in an HTML document structure
    <html>
      <head>
        {/* Add any other meta tags, stylesheets, or scripts here */}
      </head>
      <body className={styleClasses.layoutBody}>
        {/* Wrap the <body> element with the 'use client' directive */}
        <DarkLightProvider>
          <Toaster toastOptions={{ style: { background: 'rgb(51 65 85)', color: '#fff' } }} />
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow flex flex-col">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </DarkLightProvider>
      </body>
    </html>
  );
}