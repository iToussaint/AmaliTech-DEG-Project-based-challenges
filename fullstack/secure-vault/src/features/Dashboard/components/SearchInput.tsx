import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="flex items-center bg-green-400 px-6 py-2 rounded-lg group-focus:bg-amber-950">
      <input type="text" placeholder="Enter the document name" className="bg-amber-400 flex-1 outline-none placeholder:italic group" />
      <Search className="bg-blue-400" />
    </div>
  );
}

export default SearchInput;
