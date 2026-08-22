import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NodeType } from "./types";

const initialState: { currentDocument: NodeType | null } = {
  currentDocument: null,
};

const currentDocumentSlice = createSlice({
  name: "currentDocument",
  initialState,
  reducers: {
    selectDocument: (state, action: PayloadAction<NodeType>) => {
      state.currentDocument = action.payload;
    },
  },
});

export const { selectDocument } = currentDocumentSlice.actions;
export default currentDocumentSlice.reducer;
