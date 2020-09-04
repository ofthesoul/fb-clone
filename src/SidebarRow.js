import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

//this is a prop being passed, but its destructured to just title
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}{" "}
      {/* when something is passed as a prop you dont have to import, needs capital letter "Icon" */}
      <h4>{title}</h4> {/*//this would normally be props.title */}
    </div>
  );
}

export default SidebarRow;
