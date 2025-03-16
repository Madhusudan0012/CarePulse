import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Plus_Jakarta_Sans({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarePulse",
  description: "Healthcare management system ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
