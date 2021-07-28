import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon ={HomeIcon} Title="Home"/>
            <SidebarRow Icon={WhatshotIcon} Title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} Title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} Title="Library" />
            <SidebarRow Icon={HistoryIcon} Title="History" />
            <SidebarRow Icon={OndemandVideoIcon} Title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} Title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutLinedIcon} Title="Liked video" />
            <SidebarRow Icon={ExpandMoreOutLinedIcon} Title="Show more" />
            <hr/>

        </div>
    )
}

export default Sidebar
