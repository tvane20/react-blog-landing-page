import React from "react";

export default function Header({ blogTitle, navLinks, isLoggedIn }) {
  return (
    <>
      <header className="header">
        <h1 className={blogTitle.className}>{blogTitle.title}</h1>
        <nav>
          <ul id="main-menu">
            {navLinks.map((link, index) => (
              <li key={index} className="menu-item">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>

          <div>
            {isLoggedIn ? <p>you're logged in </p> : <p>you're logged out</p>}
          </div>
        </nav>
      </header>
    </>
  );
}
