import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const data = {
  blogTitle: {
    title: "My react blog",
    className: "header-title",
  },

  navLinks: [
    { url: "/home", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
  ],

  posts: [
    {
      id: 0,
      title: "",
      description: "",
    },

    {
      id: 1,
      title: "sdsxv",
      description: "dxcv",
    },
    {
      id: 2,
      title: "sdsxv",
      description: "dxcv",
    },
  ],

  isLoggedIn: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App
      blogTitle={data.blogTitle}
      navLinks={data.navLinks}
      posts={data.posts}
      isLoggedIn={data.isLoggedIn}
    />
  </React.StrictMode>
);
