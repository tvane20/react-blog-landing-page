import React, { useState } from "react";

export default function PostItem({ post, deletePost, updatePost }) {
  const [isEditing, setIsEditing] = useState(false);
  const [upTitle, setUpTitle] = useState(post.title);
  const [upDesc, setUpDesc] = useState(post.description);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    updatePost(post.id, upTitle, upDesc);
    setIsEditing(false);
  };

  return (
    <div key={post.id}>
      <h4>Title : {post.title} </h4>
      <h3>Post</h3>
      <p>{post.description} </p>

      {isEditing ? (
        <div>
          <input
            value={upTitle}
            onChange={(e) => setUpTitle(e.target.value)}
            type="text"
            id="upTitre"
          />
          <input
            value={upDesc}
            onChange={(e) => setUpDesc(e.target.value)}
            type="text"
            id="upDesc"
          />
          <button onClick={() => handleUpdate(post.id)}>Valider</button>
        </div>
      ) : (
        <button onClick={toggleEdit}>Modifier</button>
      )}

      <button onClick={() => deletePost(post.id)}>Delete post</button>
    </div>
  );
}
