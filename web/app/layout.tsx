import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EaseMed.ai Trade Desk",
  description:
    "A structured trade document repository and transaction control tower.",
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
