import React from "react";

const Form = ({ post, setPost, handleSubmit, handleKeyDown }) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={post.url}
          onChange={(e) => setPost({ ...post, url: e.target.value })}
          type="text"
          placeholder="URL"
          required
          className="form_input"
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Snip It</button>
      </form>
    </section>
  );
};

export default Form;
