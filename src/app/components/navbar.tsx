'use client'
import Link from "next/link"
import Button from "./button"
import { useState } from "react";
import { useEffect } from "react";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('blur'); // Add blur class when menu is open
    } else {
      document.body.classList.remove('blur'); // Remove blur class when menu is closed
    }
  }, [menuOpen]);


  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <h1 className="logo">SHIRAZ</h1>
        </div>

        {/* Hamburger button */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-ul">
            <li>
              <Link className="h"  href="#head" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link className="h"  href="#section-one" onClick={toggleMenu}>About Me</Link>
            </li>
            <li>
              <Link className="h"  href="#section-two" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link className="h"  href="#section-three" onClick={toggleMenu}>Skills</Link>
            </li>
            <li>
              <Link className="h"  href="#section-four" onClick={toggleMenu}>Portfolio</Link>
            </li>
            <li>
              <Link className="h"  href="#section-five" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
          <div className="button-container btn1">
            <Button text="Hire Me" />
          </div>
        </div>
        <div className="button-container btn2">
            <Button text="Hire Me"/>
          </div>
      </div>
      </nav>
    );
}