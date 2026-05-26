import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a2llc.com"),
  title: {
    default: "A2 — Engineering studio for Microsoft, AI, mobile & web",
    template: "%s · A2",
  },
  description:
    "A2 is an engineering studio building production software on the Microsoft stack and ai-native, mobile, and web applications.",
  openGraph: {
    title: "A2 — Engineering studio",
    description:
      "Microsoft-stack, agentic AI, mobile & web. Engineered for production.",
    type: "website",
    url: "https://a2llc.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
