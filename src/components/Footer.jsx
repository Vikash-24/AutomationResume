import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Botu Vikash. All rights reserved.</p>
        <p>
          Built with ❤️ and React. <a className top></a>
        </p>
      </div>
    </footer>
  );
}