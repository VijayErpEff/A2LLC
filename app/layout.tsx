import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a2llc.com"),
  title: {
    default: "A2 LLC — Microsoft-Stack Software, Mobile & Web Engineering",
    template: "%s · A2 LLC",
  },
  description:
    "A2 LLC builds production-grade software on the Microsoft stack and ships custom mobile and web applications for ambitious teams.",
  keywords: [
    "A2 LLC",
    "Microsoft stack",
    ".NET",
    "Azure",
    "Power Platform",
    "Dynamics 365",
    "custom software",
    "mobile apps",
    "web applications",
    "software consulting",
  ],
  openGraph: {
    title: "A2 LLC — Software Engineering Studio",
    description:
      "Microsoft-stack software, custom mobile and web applications. Engineered for production.",
    type: "website",
    url: "https://a2llc.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-ink-950 text-white antialiased selection:bg-accent-violet/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
