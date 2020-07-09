import React, { useEffect, useState } from 'react';

import css from '../EditPost.module.css';

const EditPostForm = ({ id, initialTitle, initialText, onEditPost }) => {
  const [ title, setTitle ] = useState('');
  const [ text, setText ] = useState('');

  useEffect(() => {
    if (initialTitle && initialText) {
      setTitle(initialTitle);
      setText(initialText);
    }
  }, [ initialTitle, initialText ]);

  const onReset = () => {
    setTitle(initialTitle);
    setText(initialText);
  };

  const onEdit = () => {
    if (title && text) {
      onEditPost(id, { title, text });
    }
  };

  return (
    <main className={css.editPostForm}>
      <div>
        <label htmlFor="">TITLE</label>
        <div>
          <input name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="">TEXT</label>
        <div>
          <textarea name="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <div>
        <button type="submit" onClick={onEdit} className="btn">Edit Post</button>
        <button type="reset" onClick={onReset} className={`btn ${css.btn}`}>Reset</button>
      </div>
    </main>
  );
};

export default EditPostForm;