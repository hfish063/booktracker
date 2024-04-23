import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import gildedBackground from "../../images/gilded-bg.jpg";
import texturedBackground from "../../images/textured-bg.jpg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booktracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="relative flex min-h-screen flex-col bg-background"
          style={{
            backgroundImage: `url(${gildedBackground.src})`,
          }}
        >
          <Header />
          <div
            className="flex flex-1 justify-center"
            style={{
              backgroundImage: `url(${texturedBackground.src})`,
            }}
          >
            <main className="flex flex-col container rounded overflow-hidden shadow-lg container py-5 px-8 h-98">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
