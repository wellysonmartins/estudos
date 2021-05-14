export const PostCard = ({ title, body, cover }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
