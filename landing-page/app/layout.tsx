// app/layout.tsx
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affiliate Hub",
  description: "Discover AI Tools That Help You Work Smarter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}