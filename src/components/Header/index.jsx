import React, { useRef } from 'react';

const Header = ({ exactPostTitle, postToEditTitle }) => {
  const titleRef = useRef(null);

  return (
    <header className="App-header">
      <h1 ref={titleRef}>
        {(exactPostTitle && exactPostTitle()) || (postToEditTitle && postToEditTitle()) || 'Blog About Space'}
      </h1>
      <a href="https://github.com/DagamiTS" target="_blank" rel="noopener noreferrer">My GitHub Page</a>
    </header>
  );
};

export default Header;