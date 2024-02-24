import "@/app/globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paradise 252",
  description: "Your home away from home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          {/* TODO: Fix positioning for Footer */}
          <Footer />
        </>
      </body>
    </html>
  );
}
