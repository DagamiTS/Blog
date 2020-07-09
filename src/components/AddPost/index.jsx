import React from 'react';

import AddPostForm from './AddPostForm/AddPostForm';
import ButtonBack from '../ButtonBack';

import css from './AddPost.module.css';

const AddPost = ({ onAddPost }) => {
  return (
    <main className={css.postComp}>
      <ButtonBack />
      <AddPostForm onAddPost={onAddPost} />
    </main>
  );
};

export default AddPost;