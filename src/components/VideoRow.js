import React from 'react';
import "./VideoRow.css";

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img className="videoRow__thumbnail" src={image} alt={channel}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} . 
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> Subscribers 
                    </span> {" "}
                    {views} Views . {timestamp}
                    
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
