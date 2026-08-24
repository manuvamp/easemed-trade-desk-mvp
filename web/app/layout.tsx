import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EaseMed.ai | Procurement intelligence",
  description:
    "The operating layer for healthcare procurement, from requirement capture to approval and fulfilment.",
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
