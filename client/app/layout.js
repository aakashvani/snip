import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "./Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              theme="dark"
            />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
