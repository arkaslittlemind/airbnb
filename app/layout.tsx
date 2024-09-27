import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modals/Modal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arksbnb | Holiday rentals, cabins , beach houses and more",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar />
        <Modal title="Hello Arka" isOpen/>
        {children}
      </body>
    </html>
  );
}
