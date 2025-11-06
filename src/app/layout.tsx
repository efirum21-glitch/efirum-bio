// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Efirum.bio",
  description: "Next.js starter for Efirum.bio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#0b0f14", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
