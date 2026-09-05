import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EaseMed.ai | Procurement intelligence",
  description:
    "The operating layer for healthcare procurement. EaseMed turns a buying request into a structured requirement, ranks suppliers on visible evidence, and keeps approvals, payment, and delivery in one auditable trail.",
  metadataBase: new URL("https://easemed-trade-desk.vercel.app"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "EaseMed.ai — Move every medical purchase from request to delivery",
    description:
      "Structure any buying request, rank suppliers on visible evidence, and keep approvals, payment, and delivery in one auditable trail.",
    url: "https://easemed-trade-desk.vercel.app",
    siteName: "EaseMed.ai",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EaseMed.ai — healthcare procurement intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EaseMed.ai — Move every medical purchase from request to delivery",
    description:
      "Healthcare procurement, structured: requirements, supplier evidence, approvals, and delivery in one trail.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
