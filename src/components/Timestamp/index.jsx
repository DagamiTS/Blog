import React from 'react';

import css from './Timestamp.module.css';

const Timestamp = ({ timestamp }) => {
  return (
    <div>
      <p className={css.timestamp}>{timestamp}</p>
    </div>
  );
};

export default Timestamp;