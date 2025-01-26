import { Navbar } from "@/components/navbar";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Open_Sans, Red_Rose } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexalis International - Oil & Gas",
  description:
    "At Nexalis, we focus toward Oil & Gas industry’s core Automation, Instrumentation, Information Technology & Telecommunication sector. Our current operational territories are Middle east, Africa and East Asia. We have a fully functional Valve Automation Center based in Abu Dhabi and have offices across the Middle east. A strong, customer-focused approach and the constant quest for top-class quality have enabled the Company to attain and sustain leadership in its major lines of business.",
};
export const viewport: Viewport = {
  themeColor: "#af2626",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${redRose.variable} font-open-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
