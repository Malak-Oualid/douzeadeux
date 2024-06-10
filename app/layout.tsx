import Layout from "./components/layout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  );
}