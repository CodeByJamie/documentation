import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/wrappers/authWrapper";

export const metadata: Metadata = {
  title: "Documentation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
