import { Avatar } from "@mui/material";
import Verified from "@mui/icons-material/VerifiedUser";
import React from "react";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  RepeatOne,
} from "@mui/icons-material";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div class="post">
      <div className="post__avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/66505477?v=4" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              Nicolas Magno
              <span className="post__header--user">
                <Verified className="post__badge" /> @Nicochess
              </span>
            </h3>
          </div>
          <div className="post__header--description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque obcaecati harum magnam quidem ea veritatis velit neque
              nemo consectetur adipisci? Maxime beatae ea pariatur explicabo
              quia. Quam quo esse consequuntur.
            </p>
          </div>
          <img
            src="https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA=="
            alt="Simple GIF"
          />
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
};

export default Post;
