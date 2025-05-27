import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../Verify/verify.css"
import Nav from "./[Nav]/Nav";

 const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User Dashboard",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
      <div className={`${inter.className} antialiased`}>
          <Nav />
          {children}
    </div>
    
  );
}
