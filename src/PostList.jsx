import PostItem from "./postItem";

export default function PostList({ post, deletePost, updatePost }) {
  return (
    <>
      {post.length > 0 ? (
        post.map((p) => (
          <PostItem
            key={p.id}
            post={p}
            deletePost={deletePost}
            updatePost={updatePost}
          />
        ))
      ) : (
        <p>no post available</p>
      )}
    </>
  );
}
