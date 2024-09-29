import type { Metadata } from "next";
import "./globals.css";
import provideFonts from "./theme";

export const metadata: Metadata = {
  title: "Varta",
  description: "Scientific collaboration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={provideFonts()}
      >
        {children}
      </body>
    </html>
  );
}
