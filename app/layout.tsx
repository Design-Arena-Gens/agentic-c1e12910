import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "问候",
  description: "用简洁的中文界面问好"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
