// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { editorial, Surtifont } from "@/lib/font";
import Nav from "@/app/_navigation/Nav";
import Footer from "@/app/_navigation/Footer";

export const metadata: Metadata = {
    title: "Coffee Shop",
    description: "Coffee Shop description",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${editorial.variable} ${Surtifont.variable}`}>
        <body className={`${editorial.className} ${Surtifont.className} text-primary px-5`} >
        <Nav  />
            {children}
        <Footer />
        </body>
        </html>
    );
}


