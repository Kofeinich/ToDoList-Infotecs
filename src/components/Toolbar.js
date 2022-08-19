import Search from "./Search";
import React from "react";
import Worker from "./Worker";


const Toolbar = (props) => {
    return (
        <div className="toolbar">
            <Worker props={props} />
            <Search/>
        </div>
    )
}
export default Toolbar