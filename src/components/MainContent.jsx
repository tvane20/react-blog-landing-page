import React from "react";
import { useState } from "react";
import PostList from "./PostList";
import FormAddPost from "./FormAddPost";

export default function MainContent({ posts, isLoggedIn }) {
  if (isLoggedIn) {
    const [post, setPost] = useState(posts);

    //delete post function

    const deletePost = (key) => {
      const updatePosts = post.filter((p) => p.id !== key);
      setPost(updatePosts);
    };

    // add post function

    const addPost = (newPost) => {
      setPost((currentPosts) => [...currentPosts, newPost]);
    };

    const updatePost = (key, updatedTitle, updatedDescription) => {
      const updatedPosts = post.map((p) => {
        if (p.id === key) {
          return {
            ...p,
            title: updatedTitle,
            description: updatedDescription,
          };
        }
        return p;
      });
      setPost(updatedPosts);
    };

    return (
      // Welcome message "static"

      <main className="main-content">
        <div className="welcome-message">Bienvenue sur Mon Super Blog !</div>
        <div className="description">
          Notre blog est dédié à partager des articles passionnants sur [sujet
          de ton blog]. Explorez nos articles pour découvrir des informations
          intéressantes et inspirantes !
        </div>

        <h2>POSTS</h2>
        {/*display posts  */}
        <PostList post={post} deletePost={deletePost} updatePost={updatePost} />

        <h1>Ajouter un nouvel article</h1>

        {/*display add post form */}

        <FormAddPost addPost={addPost} />
      </main>
    );
  }
  return <h1>YOU'RE NOT LIGGED IN</h1>;
}
