import React from "react";
import updateDate from "./updateDate.json";

import { contributorLinkStyle, footerStyle } from "./styles";

interface ContributorLinkProps {
  href: string;
  children: React.ReactNode;
}

const ContributorLink = ({ href, children }: ContributorLinkProps) => (
  <a
    className={contributorLinkStyle}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <p>
        <span>Contributed by:</span>
        <ContributorLink href="https://github.com/Mimori256">
          Mimori256
        </ContributorLink>
        ,
        <ContributorLink href="https://github.com/yudukikun5120">
          yudukikun5120
        </ContributorLink>
      </p>
      <p>最終更新: {updateDate.updateDate}</p>
    </footer>
  );
};

export default Footer;
