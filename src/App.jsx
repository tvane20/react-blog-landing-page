import "./style/styles.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainContent from "./MainContent.jsx";

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
