import { SecureVaultLogo } from "../../assets";
import SearchInput from "./components/SearchInput";
import TreeNode from "./components/TreeNode";

function LeftDashboard() {
  return (
    <div className="p-6 space-y-10 w-90 bg-card overflow-y-auto">
      <img src={SecureVaultLogo} alt="" />
      <SearchInput></SearchInput>

      <div className="space-y-3">
        <h1 className="uppercase font-bold text-sm/loose">workspace</h1>
        <TreeNode />
      </div>
    </div>
  );
}

export default LeftDashboard;
