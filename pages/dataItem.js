import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ }) {
    const { data } = useContext(AuthContext);

    return (
        <div className="data">
        {data.map((d, index) => 
            <div></div>
            <div>Bus Name: </div>
            <div>/-</div>
            <div>From: </div>
            <div>To: </div>
            <button>Delete</button>
        </div>
    );
}
export default DataItem;
