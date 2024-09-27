import React, { ReactNode } from "react";
import "@fontsource/titillium-web";
import { Helmet } from "react-helmet";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => (
  <>
    <div id="overlay" />
    <Helmet>
      <title>
        {title ? title + " | Open Data Sicilia" : "Open Data Sicilia"}
      </title>
      <script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
        crossOrigin="anonymous"
        async
      ></script>
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
