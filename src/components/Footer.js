import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span>Made with</span>
        <a target="blank" href="https://fr.reactjs.org/">
          React
        </a>
        {/* <span>at </span>
        <a target="blank" href="https://www.lereacteur.io/">
          Boulogne Billancourt
        </a> */}
        <span> by </span>
        <a
          target="blank"
          href="https://fr.linkedin.com/in/manuel-fontenelle-b406b563"
        >
          Manuel Fontenelle
        </a>
      </div>
    </div>
  );
};

export default Footer;
