import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nurcahyo Akbar — Web Developer & IoT Engineer",
  description:
    "Portfolio of Nurcahyo Akbar — S1 Teknik Informatika, Web Developer (Laravel, Next.js), and IoT Engineer based in Tarakan.",
  openGraph: {
    title: "Nurcahyo Akbar — Portfolio",
    description: "Web Developer & IoT Engineer from Tarakan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
