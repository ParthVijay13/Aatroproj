import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LoadingProvider } from "../providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ravindra Purohit - Guidance, Growth, Wisdom", // Fallback title
    template: "%s | Ravindra Purohit", // Template for dynamic titles
  },
  description: "Guidance, Growth, and Wisdom with Ravindra Purohit",
};

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LoadingProvider > */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}