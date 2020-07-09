import React from 'react';

import Timestamp from '../Timestamp';
import ButtonBack from '../ButtonBack';

import css from './ExactPost.module.css';

const ExactPost = ({ post }) => {
  return (
    <main className={css.postComp}>
      <ButtonBack className={css.exactBtn} />
      <div className={css.post}>
        <h2>{post && post.data.title}</h2>
        <Timestamp timestamp={post && post.timestamp} />
        <span className={css.line} />
        <p className={css.text}>{post && post.data.text}</p>
      </div>
    </main>
  );
};

export default ExactPost;