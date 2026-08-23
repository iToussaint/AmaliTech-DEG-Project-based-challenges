import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { searchTree } from "../utils";
import { default as data } from "./../../../../data.json";
import { useDispatch } from "react-redux";
import { expandSearchResults } from "../searchedNodesSlice";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  function searchQueryOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchQuery = event.currentTarget.value;
    setSearchQuery(newSearchQuery);
  }

  useEffect(() => {
    if (!searchQuery.trim()) return;
    dispatch(expandSearchResults(searchTree(data, searchQuery)));
  }, [searchQuery, dispatch]);

  console.log(searchQuery);

  return (
    <form className="flex bg-border overflow-hidden rounded-lg has-[input:focus]:ring-4 has-[input:focus]:ring-accent">
      <input
        value={searchQuery}
        onChange={searchQueryOnChange}
        type="text"
        placeholder="Enter the document name"
        className="flex-1 py-2 outline-none placeholder:italic px-4"
      />
      <div className="flex items-center px-2">
        <Search className="stroke-foreground" />
      </div>
    </form>
  );
}

export default SearchInput;
