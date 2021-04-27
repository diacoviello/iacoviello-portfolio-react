import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="About Me" style={{ color: "#ffffff" }} />
    </ListItem>
    <ListItem button component="a" href="/projects">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" style={{ color: "#ffffff" }} />
    </ListItem>
    <ListItem button component="a" href="/resume">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" style={{ color: "#ffffff" }} />
    </ListItem>
    <ListItem button component="a" href="/contact">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <ContactMailIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Me" style={{ color: "#ffffff" }} />
    </ListItem>
  </div>
);