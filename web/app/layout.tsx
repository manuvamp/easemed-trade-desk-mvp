import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EaseMed.ai | Procurement intelligence",
  description:
    "AI-powered healthcare procurement: predict what to buy, source verified suppliers, automate purchasing and payments, and track every shipment.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
