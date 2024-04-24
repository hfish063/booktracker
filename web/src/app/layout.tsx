import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import Header from "@/components/header";
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
        <div
          className="relative flex min-h-screen flex-col bg-background"
          style={{
            backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3405916.jpg&f=1&nofb=1&ipt=034be29e3dfd1f4b05147ebbd7c0126964858bfbb2d4c87dc33f8d901d750afd&ipo=images)`,
          }}
        >
          <Header />
          <div
            className="flex flex-1 justify-center"
            style={{
              backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1971576.jpg&f=1&nofb=1&ipt=69bca150a216f15347778a00511fd40fb5c4805e2f8e9ee529b3199c06bd5f53&ipo=images)`,
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
