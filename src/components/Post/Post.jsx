import { Avatar } from "@mui/material";
import Verified from "@mui/icons-material/VerifiedUser";
import React, { forwardRef } from "react";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  RepeatOne,
} from "@mui/icons-material";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div class="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header--text">
              <h3>
                {displayName}
                <span className="post__header--user">
                  {verified ? <Verified className="post__badge" /> : null} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__header--description">
              <p>{text}</p>
            </div>
            {image ? <img src={image} alt="Simple GIF" /> : null}
            <div className="post__footer">
              <ChatBubbleOutline fontSize="small" />
              <RepeatOne fontSize="small" />
              <FavoriteBorder fontSize="small" />
              <Publish fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
