import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
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
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
