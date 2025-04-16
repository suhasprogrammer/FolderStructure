import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

import API from "../api";
import Sidebar from "../component/SideBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [description, setDescription] = useState("");

  const fetchFolders = async () => {
    const res = await API.get("/folders");
    setFolders(res.data);
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const handleCreateFolder = async () => {
    await API.post("/folders", { name: folderName, description });
    setOpenModal(false);
    setFolderName("");
    setDescription("");
    fetchFolders(); // Refresh list
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Typography variant="h5">Folders & Documents</Typography>
        <Box mt={2}>
          {folders.length === 0 ? (
            <Box textAlign="center" mt={10}>
              <Typography variant="h6">This folder is empty</Typography>
              <Typography variant="body2">
                Create a new folder or upload a document
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => setOpenModal(true)}
              >
                + CREATE FOLDER
              </Button>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {folders.map((folder) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={folder._id}
                  onClick={() => navigate(`/folder/${folder._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <Box border="1px solid #ccc" borderRadius={2} p={2}>
                    <Typography variant="subtitle1">{folder.name}</Typography>
                    <Typography variant="body2">
                      {folder.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Folder Name"
            fullWidth
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button onClick={handleCreateFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
