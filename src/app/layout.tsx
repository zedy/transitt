import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transitt",
  description:
    "Transitt is a transit app for the public transportation system in Switzerland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-600`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
