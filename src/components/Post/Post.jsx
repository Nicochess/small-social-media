import { Avatar } from "@mui/material";
import React from "react";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div class="post">
      <div className="post__avatar">
        <Avatar />
      </div>
    </div>
  );
};

export default Post;
