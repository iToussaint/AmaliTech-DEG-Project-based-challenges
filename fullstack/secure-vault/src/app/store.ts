import { configureStore } from "@reduxjs/toolkit";
import currentDocumentReducer from "./../features/Dashboard/currentDocumentSlice";
import searchNodesReducer from "./../features/Dashboard/searchedNodesSlice";

const store = configureStore({
  reducer: {
    currentDocument: currentDocumentReducer,
    searchedNodes: searchNodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
