import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('trivro-theme');document.documentElement.className=t==='light'?'light':'dark'}catch(e){document.documentElement.className='dark'}})()`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <ComingSoonModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
