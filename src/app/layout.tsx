import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trade Scanner",
  description: "Dunno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-foreground text-white">{children}</body>
    </html>
  );
}
