import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Spyros Gavriil — Backend & Systems Engineer",
  description:
    "Computer Science student and software engineering intern focused on backend systems, APIs, databases, and infrastructure-minded software.",
  openGraph: {
    title: "Spyros Gavriil",
    description:
      "Computer Science student and software engineering intern focused on backend systems, APIs, databases, and infrastructure-minded software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} ${sora.variable} antialiased selection:bg-accent/20`}
      >
        {children}
      </body>
    </html>
  );
}
