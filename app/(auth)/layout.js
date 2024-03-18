import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Student Council Admin",
  description: "Developed by GDSC || Designed by IDEATE",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
