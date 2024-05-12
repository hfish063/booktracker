import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
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
        <div className="relative flex min-h-screen ">
          <NavBar />
          <div className="flex flex-1 justify-center">
            <main className="flex flex-col container overflow-hidden py-5 px-8">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
