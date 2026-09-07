import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitwise Software Solutions",
  description:
    "Software solutions, precisely delivered.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
