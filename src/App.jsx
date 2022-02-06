import React from "react";
import "./sass/styles.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/*Feed */}
      <Feed />

      <Post />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
