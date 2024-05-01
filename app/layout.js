import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NETFILMS",
  description: "Created by kardassuayb",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className="contain">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
