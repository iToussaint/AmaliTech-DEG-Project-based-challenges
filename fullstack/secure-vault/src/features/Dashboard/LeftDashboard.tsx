import { SecureVaultLogo } from "../../assets";
import SearchInput from "./components/SearchInput";
import { default as data } from "./../../../data.json";
import TreeNode from "./components/TreeNode";

function LeftDashboard() {
    console.log(data)
  return (
    <div className="p-6">
      <img src={SecureVaultLogo} alt="" />
      <SearchInput></SearchInput>

      <div>{data.map(node => <TreeNode node={node} />
      )}</div>
    </div>
  );
}

export default LeftDashboard;
