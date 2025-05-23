import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./verify.css"


 const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


export const metadata: Metadata = {
  title: "User authentication",
  description: "User authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} antialiased`}>
          {children}
    </div>
    
  );
}
