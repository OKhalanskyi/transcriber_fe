import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "../config/globals.css";
import {ReactNode} from "react";
import {Header} from "@/components";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Transcriber",
  description: "Oleh Khalanskyi",
};

export default function RootLayout({
  children,
  authentication
}: Readonly<{
  children: ReactNode;
  authentication: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={roboto.className}>
      <Header/>
      {children}
      {authentication}
    </body>
    </html>
  );
}
