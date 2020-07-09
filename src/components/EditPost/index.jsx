import React from 'react';

import EditPostForm from './EditPostForm/EditPostForm';
import ButtonBack from '../ButtonBack';

import css from './EditPost.module.css';

const EditPost = ({ post, onEditPost }) => {
  return (
    <main className={css.postComp}>
      <ButtonBack />
      <EditPostForm id={post && post.id} initialTitle={post && post.data.title} initialText={post && post.data.text}
                    onEditPost={onEditPost} />
    </main>
  );
};

export default EditPost;