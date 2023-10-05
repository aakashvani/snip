import Navbar from "@/components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./Providers";

export const metadata = {
  title: "Snip",
  description: "Make any URL short",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <main className="max-w-3xl mx-auto">
            <Navbar />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
