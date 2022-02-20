import { Button, Avatar } from "@mui/material";
import React, { useState } from "react";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetImage, setTweetImage] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Lorraine",
      username: "Lorrainecrst",
      text: tweetMessage,
      avatar:
        "https://i.pinimg.com/280x280_RS/97/4f/75/974f75b55a5c4497c5afeaf46d806048.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/66505477?v=4" />
          <input
            type="text"
            placeholder="O que está acontecendo ?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <div className="tweetBox__image">
          <input
            type="text"
            placeholder="Adicione a URL da imagem"
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
          />
        </div>
        <Button className="tweetBox__button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
