import React from 'react';
import "./SidebarRow.css"
import HomeIcon from "@material-ui/icons/Home";

function SidebarRow({selected,Icon,Title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{Title}</h2>
        </div>
    )
}

export default SidebarRow
