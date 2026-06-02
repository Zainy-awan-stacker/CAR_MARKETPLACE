import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";

function OwnerLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}

export default OwnerLayout;