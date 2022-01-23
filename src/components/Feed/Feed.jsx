import React from "react";
import TweetBox from "../TweetBox/TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}
    </div>
  );
};

export default Feed;
