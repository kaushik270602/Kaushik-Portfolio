import type { Metadata } from "next";
import { Playfair_Display, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-cinematic',
  display: 'swap',
});

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-credits',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kaushik Mitta | Software Developer",
  description: "A cinematic journey through the portfolio of Venkata Kaushik Mitta - Software Developer, Cloud Enthusiast, and Problem Solver",
  keywords: ["Software Developer", "Portfolio", "React", "Next.js", "AWS", "Full Stack Developer"],
  authors: [{ name: "Venkata Kaushik Mitta" }],
  openGraph: {
    title: "Kaushik Mitta | Software Developer",
    description: "A cinematic journey through the portfolio of Venkata Kaushik Mitta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${bebas.variable} ${montserrat.variable} font-body bg-cinema-black text-cinema-cream antialiased`}>
        {/* Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />
        
        {/* Vignette Effect */}
        <div className="vignette" aria-hidden="true" />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
