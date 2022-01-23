import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SidebarOption from "../SidebarOption/SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon" />
      <SidebarOption text="Home" icon={<HomeIcon />} />
      <SidebarOption text="Explore" icon={<SearchIcon />} />
      <SidebarOption text="Notifications" icon={<NotificationsIcon />} />
      <SidebarOption text="Messages" icon={<MailOutlineIcon />} />
      <SidebarOption text="Bookmarks" icon={<BookmarkBorderIcon />} />
      <SidebarOption text="Lists" icon={<ListAltIcon />} />
      <SidebarOption text="Profile" icon={<PermIdentityIcon />} />
      <SidebarOption text="More" icon={<MoreHorizIcon />} />

      <Button variant="outlined" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
