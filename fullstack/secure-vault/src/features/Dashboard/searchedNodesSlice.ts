import { createSlice } from "@reduxjs/toolkit";
import type { NodeType } from "./types";
import { findPath } from "./utils";
import { default as data } from "./../../../data.json";

const initialState: string[] = [];

const searchedNodesSlice = createSlice({
  name: "searchedNodes",
  initialState,
  reducers: {
    expandSearchResults: (
      state,
      { payload: results }: { payload: NodeType[] },
    ) => {
      const newState = new Set<string>();
      for (const result of results) {
        const path = findPath(data, result.id);

        if (!path) continue;

        for (const node of path) {
          if (node.type === "folder" && !state.includes(node.id)) {
            console.log("=================", node.name)
            newState.add(node.id);
          }
        }
      }

      return [...newState];
    },
  },
});

export const { expandSearchResults } = searchedNodesSlice.actions;
export default searchedNodesSlice.reducer;
