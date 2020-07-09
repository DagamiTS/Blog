import React, { useState } from 'react';
import axios from 'axios';

import css from '../AddPost.module.css';

const AddPostForm = ({ onAddPost }) => {
  const [ title, setTitle ] = useState('');
  const [ text, setText ] = useState('');

  const onAdd = () => {
    if (title && text) {
      const time = new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      axios.post('https://api-for-react-blog.herokuapp.com/api/posts',
        JSON.stringify({
          data: {
            title,
            text
          },
          timestamp: time,
        }))
        .then(res => onAddPost(res.data));
    }
  };

  return (
    <div className={css.addPostForm}>
      <label htmlFor="title">TITLE</label>
      <div>
        <input value={title} id="title" type="text" onChange={e => setTitle(e.target.value)}
               placeholder="Enter post title" />
      </div>
      <label htmlFor="text">TEXT</label>
      <div>
        <textarea value={text} id="text" onChange={e => setText(e.target.value)} placeholder="Enter post text" />
      </div>
      <button onClick={onAdd} className="btn">Add Post</button>
    </div>
  );
};

export default AddPostForm;