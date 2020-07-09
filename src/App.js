import React, { useEffect, useState } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Posts, Header, ExactPost, AddPost, EditPost } from './components';

import './App.css';

function App() {
  const [ posts, setPosts ] = useState(null);
  const [ exactPost, setExactPost ] = useState(null);
  const [ postToEdit, setPostToEdit ] = useState(null);
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    axios.get('https://api-for-react-blog.herokuapp.com/api/posts')
      .then(res => setPosts(res.data));
  }, []);

  useEffect(() => {
    const postId = Number(location.pathname.split('posts/')[1]);
    if (posts) {
      const post = posts.find(post => post.id === postId);
      setExactPost(post);
    }
  }, [ location.pathname, posts ]);

  useEffect(() => {
    const postId = Number(location.pathname.split('edit/')[1]);
    if (posts) {
      const post = posts.find(post => post.id === postId);
      setPostToEdit(post);
    }
  }, [ location.pathname, posts ]);

  const exactPostTitle = () => {
    if (exactPost && exactPost.data.title.length > 20) {
      return exactPost.data.title.substr(0, 25) + '...';
    }
    if (exactPost) {
      return exactPost.data.title;
    }
  };

  const postToEditTitle = () => {
    if (postToEdit && postToEdit.data.title.length > 20) {
      return postToEdit.data.title.substr(0, 25) + '...';
    }
    if (exactPost) {
      return postToEdit.data.title;
    }
  };

  const onAddPost = (newPost) => {
    const newPosts = [ newPost, ...posts ];
    setPosts(newPosts);
    history.push('/');
  };

  const onEditPost = (postId, data) => {
    const newPosts = posts.map(post => {
      if (post.id === postId) {
        post.data = data;
      }
      return post;
    });
    setPosts(newPosts);
    history.push('/');
    axios.put(`https://api-for-react-blog.herokuapp.com/api/posts/${postId}`, JSON.stringify(data))
      .catch(() => alert('Some error while updating post'));
  };

  const deletePost = (postId) => {
    const newPosts = posts.filter(post => post.id !== postId);
    setPosts(newPosts);
    axios.delete(`https://api-for-react-blog.herokuapp.com/api/posts/${postId}`)
      .catch(() => alert('Some error while deleting post'));
  };

  return (
    <div className="App">
      <Header exactPostTitle={exactPostTitle} postToEditTitle={postToEditTitle} />
      <Route exact path="/">
        <Posts posts={posts} deletePost={deletePost} />
      </Route>
      <Route path="/posts/:id">
        <ExactPost post={exactPost} />
      </Route>
      <Route path="/new">
        <AddPost onAddPost={onAddPost} />
      </Route>
      <Route path="/edit/:id">
        <EditPost post={postToEdit} onEditPost={onEditPost} />
      </Route>
    </div>
  );
}

export default App;