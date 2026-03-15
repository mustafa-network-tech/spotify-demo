import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mavisarkilar.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mavi Sarkılar | Müzik Sanatçısı & Spotify Vitrin",
    template: "%s | Mavi Sarkılar",
  },
  description:
    "Mavi Sarkılar resmi sitesi. Mustafa Öner · MK Digital Systems. Yeni şarkılar, Spotify listeleri, konser tarihleri ve müzik videoları. Modern pop, akustik ve lofi.",
  keywords: [
    "Mavi Sarkılar",
    "Mustafa Öner",
    "MK Digital Systems",
    "müzik",
    "sanatçı",
    "Spotify",
    "Türkiye",
    "pop",
    "akustik",
    "lofi",
    "konser",
    "single",
  ],
  authors: [{ name: "Mustafa Öner", url: "https://mavikadraj.com.tr" }],
  creator: "Mustafa Öner · MK Digital Systems",
  publisher: "MK Digital Systems",
  applicationName: "Mavi Sarkılar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Mavi Sarkılar",
    title: "Mavi Sarkılar | Mustafa Öner · MK Digital Systems",
    description:
      "Mavi Sarkılar resmi sitesi. Mustafa Öner · MK Digital Systems. Yeni şarkılar, Spotify listeleri, konser tarihleri ve müzik videoları.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mavi Sarkılar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavi Sarkılar | Mustafa Öner · MK Digital Systems",
    description:
      "Mavi Sarkılar resmi sitesi. Mustafa Öner · MK Digital Systems. Yeni şarkılar, Spotify listeleri, konser tarihleri.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
