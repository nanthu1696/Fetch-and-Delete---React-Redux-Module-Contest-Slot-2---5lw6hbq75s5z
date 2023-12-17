import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ d }) {
  const { data, setData, msg, setMsg } = useContext(AuthContext);

  function handle() {
    const newArray = data.filter((item) => item.id !== d.id);
    setData(newArray);
    setMsg("Data Deleted");
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }
  return (
    <div className="data">
      <div>{d.id}</div>
      <div>Bus Name:{d.busName}</div>
      <div>{d.ticketPrice}/-</div>
      <div>From: {d.source}</div>
      <div>To: {d.destination}</div>
      <button onClick={handle}>Delete</button>
    </div>
  );
}
export default DataItem;
