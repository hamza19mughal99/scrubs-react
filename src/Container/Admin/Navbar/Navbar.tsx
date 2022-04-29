import React from 'react';
import { adminSideBarItems } from "./routes";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const AdminNavBar = () => {
    return (
      <Sidebar role={"admin"} sideBarItems={adminSideBarItems} />
    );
};
export default AdminNavBar;
