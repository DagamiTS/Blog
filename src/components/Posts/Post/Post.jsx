import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Timestamp from '../../Timestamp';

import css from './Post.module.css';

const Post = ({ id, title, text, deletePost, timestamp }) => {
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const textLength = textRef.current.textContent.length;
    if (textLength > 97) {
      const newText = textRef.current.textContent.substr(0, 97) + '...'
      textRef.current.textContent = newText;
    }
  }, [ textRef ]);

  useEffect(() => {
    const titleLength = titleRef.current.textContent.length;
    if (titleLength > 35) {
      const newTitle = titleRef.current.textContent.substr(0, 25) + '...'
      titleRef.current.textContent = newTitle;
    }
  }, [ titleRef ]);

  return (
    <div className={css.post}>
      <h2 ref={titleRef}>{title}</h2>
      <Timestamp timestamp={timestamp} />
      <p ref={textRef} className={css.text}>{text}</p>
      <NavLink to={`/posts/${id}`} className={css.more}>
        read more
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right"
             className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
          <path fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
        </svg>
      </NavLink>
      <ul>
        <li>
          <NavLink to={`/edit/${id}`} className={css.btn}>Edit</NavLink>
        </li>
        <li>
          <button onClick={() => deletePost(id)} className={css.btn}>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default Post;