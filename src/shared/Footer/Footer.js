import React from "react";
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="footer">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
