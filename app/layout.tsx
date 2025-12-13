import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSideMenu from "./components/CartSideMenu";
import WelcomeModal from "./components/WelcomeModal";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";

const canela = localFont({
  src: [
    {
      path: "../public/font/CanelaText-Thin-Trial.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-ThinItalic-Trial.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-LightItalic-Trial.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-RegularItalic-Trial.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-RegularNo2-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-RegularNo2Italic-Trial.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-MediumItalic-Trial.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-BoldItalic-Trial.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/CanelaText-Black-Trial.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/CanelaText-BlackItalic-Trial.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-canela",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFR Wear",
  description: "NFR Wear Store ",
  icons: {
    icon: '/vercel.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${canela.variable} antialiased`}
        style={{ fontFamily: "var(--font-canela)" }}
      >
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <CartSideMenu />
            <WelcomeModal />
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
