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
          <main>
            <Navbar />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
