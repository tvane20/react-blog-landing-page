import React from "react";
import { useState } from "react";

export default function FormAddPost({ addPost }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    const newPost = {
      id: crypto.randomUUID(),
      title: newTitle,
      description: newDesc,
    };
    addPost(newPost);
    setNewTitle("");
    setNewDesc("");
  };

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
