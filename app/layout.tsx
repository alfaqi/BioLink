import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "BioLink - Decentralized Healthcare Research",
  description: "Participate in healthcare research securely and transparently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>BioLink © 2024</p>
        </footer>
      </body>
    </html>
  );
}
