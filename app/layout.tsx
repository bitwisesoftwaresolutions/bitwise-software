import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitwise Software Solutions | Software that delivers",
  description:
    "Cape Town software specialists delivering dependable mobile, web, fintech and e-commerce products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
