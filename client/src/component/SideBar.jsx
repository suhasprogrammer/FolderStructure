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
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { folderData, documentData } = useSelector((state) => state.folder);

  return (
    <Box sx={{ width: 250, bgcolor: "#f5f5f5", height: "100vh", padding: 2 }}>
      <h3>Folders & Documents</h3>
      <List>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={`Folders ${folderData?.length}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary={`Documents ${documentData?.length}`} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {folderData?.map((data) => (
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={data?.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
