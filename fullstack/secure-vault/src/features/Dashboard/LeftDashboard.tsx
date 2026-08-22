import { SecureVaultLogo } from "../../assets";
import SearchInput from "./components/SearchInput";
import { default as data } from "./../../../data.json";
import TreeNode from "./components/TreeNode";

function LeftDashboard() {
    console.log(data)
  return (
    <div className="p-6 space-y-10 bg-sky-400 w-100">
      <img src={SecureVaultLogo} alt="" />
      <SearchInput></SearchInput>


<TreeNode></TreeNode>
      
      </div>
    
  );
}

export default LeftDashboard;
