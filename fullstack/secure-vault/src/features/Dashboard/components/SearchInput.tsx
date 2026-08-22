import { Search } from "lucide-react";
import { useState } from "react";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  function searchQueryOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchQuery = event.currentTarget.value;
    setSearchQuery(newSearchQuery);
  }

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
