import { configureStore } from "@reduxjs/toolkit";
import currentDocumentReducer from "./../features/Dashboard/currentDocumentSlice";

const store = configureStore({
  reducer: {
    currentDocument: currentDocumentReducer,
  },
});

export default store;
