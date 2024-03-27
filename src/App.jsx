import "./style/styles.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";

export default function App({ blogTitle, navLinks, posts, isLoggedIn }) {
  return (
    <>
      <Header
        blogTitle={blogTitle}
        navLinks={navLinks}
        isLoggedIn={isLoggedIn}
      />
      <MainContent posts={posts} isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}
