import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
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
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            id={post.text}
            displayName={post.displayName}
            username={post.username}
            avatar={post.avatar}
            text={post.text}
            verified={post.verified}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
