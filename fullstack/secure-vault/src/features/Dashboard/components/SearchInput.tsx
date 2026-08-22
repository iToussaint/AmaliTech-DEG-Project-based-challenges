import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="flex bg-border overflow-hidden rounded-lg has-[input:focus]:ring-4 has-[input:focus]:ring-accent">
      <input
        type="text"
        placeholder="Enter the document name"
        className="flex-1 py-2 outline-none placeholder:italic px-4"
      />
      <div className="flex items-center px-2">
        <Search className="stroke-foreground" />
      </div>
    </div>
  );
}

export default SearchInput;
