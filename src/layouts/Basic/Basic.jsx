import { Outlet } from "react-router-dom";

import "./Basic.scss";

export default function BasicLayout(props) {
  return (
    <div className="basic-layout">
      <Outlet />
    </div>
  );
}
