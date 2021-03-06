import React from 'react'
import "./ChannelRow.css";
import {Avatar} from "@material-ui/core"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({image,channel,verified,noOfVideos,subs,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={channel}/>
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <VerifiedIcon/>}
                </h4>
                <p> 
                    {subs} Subscription {noOfVideos} Videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
