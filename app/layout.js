import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Shadexr – AI Enhanced Palette Generator",
  description:
    "Transform ideas into colors with AI — Perfectly suited for developers, designers, and those seeking inspiration."
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
