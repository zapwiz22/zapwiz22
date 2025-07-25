import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import ScrollProgress from "@/components/ScrollProgress";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Kumar",
  description: "Portfolio Website of Jayant Kumar aka zapwiz22.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.className}>
      <body className={`antialiased bg-black`}>
        <ScrollProgress />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
