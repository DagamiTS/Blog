import React from 'react';
import { NavLink } from 'react-router-dom';

import Post from './Post/Post';

import css from './Posts.module.css';

const Posts = ({ posts, deletePost }) => {
  let postsElements;
  if (posts) {
    postsElements = posts.map(post => <Post key={post.id}
                                            id={post.id}
                                            timestamp={post.timestamp}
                                            title={post.data.title}
                                            text={post.data.text}
                                            deletePost={deletePost} />);
  }

  return (
    <main className={css.posts}>
      <NavLink to="/new" className={css.newPost}>Add new post</NavLink>
      {postsElements}
    </main>
  );
};

export default Posts;