import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>Copyright {date.getFullYear()} | Umut Can Yılmaz</p>
    </footer>
  );
};

export default Footer;
