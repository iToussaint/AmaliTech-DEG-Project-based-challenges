import { SecureVaultLogo } from "../../assets";
import SearchInput from "./components/SearchInput";

function DashboardLayout() {
  return (
    <section className="bg-background min-h-dvh text-foreground grid grid-cols-3">
      <div className="bg-accent p-6">
        <img src={SecureVaultLogo} alt="" />
        <SearchInput></SearchInput>
      </div>
      <div className="bg-muted-foreground"></div>

      <div className="bg-card"></div>
    </section>
  );
}

export default DashboardLayout;
