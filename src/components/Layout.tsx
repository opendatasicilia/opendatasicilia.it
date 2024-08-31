import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <div id="overlay" />
      <Helmet>
        <title>
          {title ? title + " | Open Data Sicilia" : "Open Data Sicilia"}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main className="mt-4">{children}</main>
      <Footer />
    </>
  );
};
