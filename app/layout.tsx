import "./globals.css";

export const metadata = {
  title: "Mavi Sarkılar",
  description: "Mavi Sarkılar · Modern müzik sanatçısı vitrin sitesi",
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
