import React, { useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#workflow", label: "Workflow" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((v) => !v);
  const handleLink = () => setOpen(false);

  return (
    <nav className="navbar">
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="brand">
        <div className="logo-mark">VK</div>
      </div>
      <button className="hamburger" onClick={handleClick}>
        {open ? "Close" : "Menu"}
      </button>
    </nav>
  );
}