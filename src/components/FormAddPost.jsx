import React from "react";
import { useState } from "react";

// Component for adding a new post

export default function FormAddPost({ addPost }) {
  // State variables for new post title and description

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  // Function to handle form submission

  const handleSubmit = function (e) {
    e.preventDefault();

    // Create a new post object with unique ID, title, and description

    const newPost = {
      id: crypto.randomUUID(),
      title: newTitle,
      description: newDesc,
    };
    // Call addPost function to add the new post
    addPost(newPost);
    // Clear input fields after submission
    setNewTitle("");
    setNewDesc("");
  };

  // JSX for the form to add a new post

  return (
    <>
      <form onSubmit={handleSubmit} className="new-post">
        <label>Titre :</label>
        <br />
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          id="titre"
        />
        <br />

        <label>Description :</label>
        <br />
        <textarea
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          id="description"
          name="description"
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Ajouter" />
      </form>
    </>
  );
}
