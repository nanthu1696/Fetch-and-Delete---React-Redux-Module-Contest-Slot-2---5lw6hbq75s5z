import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";

import DataItem from "./dataItem";
function Dashboard() {
  const { data, setData, msg, setMsg } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      <div id="message">{msg}</div>

      {data.map((d, index) => {
        return <DataItem d={d} />;
      })}
    </div>
  );
}
export default Dashboard;
