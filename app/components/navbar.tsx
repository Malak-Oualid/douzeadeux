"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/globals.css";

const Navbar = () => {
  const [showNavbar, setShowNavBar] = useState(false);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {!showNavbar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setShowNavBar(true)}
          className="menu-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ margin: "12px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setShowNavBar(false)}
              className="menu-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <div className="nav-content"
            >
              <Link href="/" style={{ marginBottom: "100px" }}>
                Home
              </Link>
              <Link href="/pages/about" style={{ marginBottom: "100px" }}>
                About
              </Link>
              <Link href="/contact" style={{ marginBottom: "100px" }}>
                Contact
              </Link>
            </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
