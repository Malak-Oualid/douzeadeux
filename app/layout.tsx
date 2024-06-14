import "./styles/globals.css";
import { ReactNode } from "react";
import Head from "next/head";
import Layout from "./components/layout";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="body">
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
