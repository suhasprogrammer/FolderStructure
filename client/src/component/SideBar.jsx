import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "#f5f5f5", height: "100vh", padding: 2 }}>
      <h3>Folders & Documents</h3>
      <List>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Folders 200+" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Documents 200+" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Mission_Logs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Technical_Specs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Crew_Information" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
