import React from "react";
import { useHistory } from "react-router-dom";

const Summary = () => {
    let history = useHistory();

    return(
        <>
            <table>
                <tbody>

                </tbody>
            </table>
            <button type="button" onClick={() => history.push("/addNew")}>Add new DU</button>
        </>
    );
}

export default Summary;