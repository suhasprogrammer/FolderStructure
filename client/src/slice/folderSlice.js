import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name: "folder",
  initialState: {
    folderData: [],
    documentData: [],
  },
  reducers: {
    setFolderData: (state, action) => {
      state.folderData = action.payload;
    },
    setDocumentData: (state, action) => {
      state.documentData = action.payload;
    },
  },
});
export const { setFolderData, setDocumentData } = folderSlice.actions;

export default folderSlice.reducer;
