import React, { useEffect, useState } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          avatar={post.avatar}
          text={post.text}
          verified={post.verified}
        />
      ))}
    </div>
  );
};

export default Feed;
