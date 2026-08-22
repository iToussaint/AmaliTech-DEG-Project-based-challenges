import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="flex items-center bg-border px-6 py-2 rounded-lg has-[input:focus]:ring-4 has-[input:focus]:ring-accent">
      <input
        type="text"
        placeholder="Enter the document name"
        className=" outline-none placeholder:italic bg-yellow-400"
      />
      <Search className="bg-blue-400 text-green-600" />
    </div>
  );
}

export default SearchInput;
