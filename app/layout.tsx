import "./globals.css";
import { DemoBar } from "./DemoBar";
import { MK_HOME } from "./demo";

// Absolute URLs (og:image) resolve against the actual deployment, not a domain MK does not own.
const siteUrl = "https://spotify-demo-hazel.vercel.app";
const title = "Mavi Sarkılar — Sanatçı Web Sitesi Demosu | MK Digital Systems";
const description =
  "MK Digital Systems'in müzisyenler için hazırladığı örnek web sitesi: Spotify vitrini, müzik videoları, konser takvimi ve bülten alanı. Mavi Sarkılar gerçek bir sanatçı değildir.";

// Demo site: kept out of search results so it is never mistaken for a real artist (X-Robots-Tag in next.config.mjs too).
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Mavi Sarkılar (Demo)",
  },
  description,
  authors: [{ name: "MK Digital Systems", url: MK_HOME }],
  creator: "MK Digital Systems",
  publisher: "MK Digital Systems",
  applicationName: "Mavi Sarkılar (Demo)",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Mavi Sarkılar (Demo)",
    title: "Mavi Sarkılar · Sanatçı web sitesi demosu",
    description: "Müzisyenler için hazırlanmış örnek web sitesi. MK Digital Systems portföy projesi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mavi Sarkılar — sanatçı web sitesi demosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavi Sarkılar · Sanatçı web sitesi demosu",
    description: "Müzisyenler için hazırlanmış örnek web sitesi. MK Digital Systems portföy projesi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <DemoBar />
        {children}
      </body>
    </html>
  );
}
