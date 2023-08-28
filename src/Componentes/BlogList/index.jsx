import React from 'react';

const posts = [
    { title: 'Postagem 1', content: 'Conteúdo da postagem 1' },
    { title: 'Postagem 2', content: 'Conteúdo da postagem 2' },
    { title: 'Postagem 3', content: 'Conteúdo da postagem 3' },
  ];


const BlogList = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
