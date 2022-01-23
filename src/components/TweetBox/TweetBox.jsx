import { Button, Avatar } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/66505477?v=4" />
          <input type="text" placeholder="O que está acontecendo ?" />
        </div>
        <div className="tweetBox__image">
          <input type="text" placeholder="Adicione a URL da imagem" />
        </div>
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
