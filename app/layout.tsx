import "./globals.css";

export const metadata = {
  title: "Spotify Demo Site",
  description: "Modern Spotify tanıtım sitesi demosu",
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
