import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { findPath } from "../utils";
import { default as data } from "./../../../../data.json";

function BreadCrumb() {
  const selectedDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );

  let path: string | undefined = "/";

  if (selectedDocument.currentDocument)
    path = findPath(data, selectedDocument.currentDocument?.id)?.reduce(
      (acc, el) => {
        const newPath = acc.concat(" / ", el.name);
        return newPath;
      },
      "",
    );

  return <p>{path}</p>;
}

export default BreadCrumb;
