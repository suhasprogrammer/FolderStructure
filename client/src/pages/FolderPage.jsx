import { useParams } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import Recat, { useEffect, useState } from "react";
import API from "../api";

const FolderPage = () => {
  const { id } = useParams(); // folder id
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await API.post(`/documents/upload/${id}`, formData);
    fetchDocuments(); // Refresh document list
  };

  const fetchDocuments = async () => {
    const res = await API.get(`/documents/folder/${id}`);
    setDocuments(res.data);
  };
  return (
    <>
      <Box>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
      {documents?.map((doc) => (
        <Box key={doc._id} p={2} border="1px solid #ccc" mt={1}>
          <Typography>{doc.name}</Typography>
        </Box>
      ))}
    </>
  );
};

export default FolderPage;
