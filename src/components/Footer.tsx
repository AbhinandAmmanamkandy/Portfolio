import React from 'react';

interface FooterProps {
  personalName: string;
}

export const Footer: React.FC<FooterProps> = ({ personalName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <span className="logo-first">{personalName.split(' ')[0]}</span>
          <span className="logo-last"> {personalName.split(' ').slice(1).join(' ')}</span>.
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {personalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
