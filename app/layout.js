// import tailwind.css file
import "../assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/GlobalContext.js";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google'
import TopNavBar from "@/components/NavBars/TopNavBar";
import BodyWrapper from "@/components/BodyWrapper";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    // %s will be replaced by the specific page's title
    template: "%s | Pacific Maritime Industries Corp.",
    // This is the fallback if a page doesn't define its own title
    default: "Pacific Maritime Industries Corp provides heavy-duty, NAVSEA-compliant marine fabrication, shipboard furniture, and custom seating for the U.S. Navy and commercial shipyards. Founded in 1979.",
  },
  description: "Heavy-Duty Marine Fabrication & NAVSEA-Compliant Shipboard Furniture.",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  // Add Google Site Verification code here if provided by Search Console
  // verification: {
  //   google: 'W37odNG3vuzM8uy4O2na-c9G_OgGWDCe8aYpWQmzw9o',
  // },
  // You can also add global open graph images here for social media sharing
  openGraph: {
    title: 'Pacific Maritime Industries Corp.',
    description: 'Heavy-Duty Marine Fabrication & NAVSEA-Compliant Shipboard Furniture.',
    url: 'https://www.pacmaritime.com',
    siteName: 'Pacific Maritime Industries Corp.',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <GoogleTagManager />
          <BodyWrapper>
            <TopNavBar />
            <main>
              {children}
            </main>
            <ToastContainer />
            <SpeedInsights />
          </BodyWrapper>
        </html>
        <Footer />
      </AuthProvider>
    </GlobalProvider>
  );
}
