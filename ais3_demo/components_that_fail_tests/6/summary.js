import React from "react";
import { useHistory } from "react-router-dom";

const Summary = () => {
    let history = useHistory();

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <button type="button" onClick={() => history.push("/addNew")}>Add new DU</button>
        </>
    );
}

export default Summary;