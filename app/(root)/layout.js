import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@components/Global/Navbar";
import Footer from "@components/Global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Council",
  description: "Developed by GDSC || Designed by IDEATE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
