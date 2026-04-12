import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trivro AI | India's Best AI Marketing Tools Ecosystem",
  description:
    "Build & scale high-converting campaigns in minutes, not weeks. 51+ AI tools under one system. Reduce dependency, cut costs, and take full control of your growth.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "Trivro AI",
    "AI tools",
    "marketing platform",
    "lead generation",
    "funnel builder",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
