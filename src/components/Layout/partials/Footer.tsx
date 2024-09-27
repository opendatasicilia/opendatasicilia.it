import React from "react";
import Logo from "@assets/images/ods-logo-dennis-v1.svg";
import { menu, socials } from "@data";
import { Link } from "gatsby";

export const Footer = () => {
  return (
    <footer className="bg-dark py-4">
      <div className="container-fluid mx-auto">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-flex justify-content-center">
              <GreenBar />
              <LogoComponent />
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <Menu />
          </div>
          <div className="col-lg-4">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

const GreenBar = () => (
  <div
    className="me-4 bg-primary d-none d-lg-block"
    style={{
      height: "258px",
      width: "33px",
    }}
  />
);

const LogoComponent = () => (
  <img
    style={{ height: "185px" }}
    src={Logo}
    alt="opendatasicilia"
    className="img-fluid align-self-center"
  />
);

const Menu = () => (
  <ul className="list-unstyled align-self-center">
    {menu.map((item, i) => (
      <li key={i}>
        <Link className="text-white text-decoration-none" to={item.url}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Socials = () => (
  <ul className="list-unstyled align-self-center">
    {socials.map((socialGroup, i) =>
      socialGroup.map((item, j) => (
        <li key={j} className="mx-2">
          <a
            className="text-white text-decoration-none"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.name}
          </a>
        </li>
      ))
    )}
  </ul>
);
