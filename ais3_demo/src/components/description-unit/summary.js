import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Summary = () => {
    let history = useHistory();

    const descriptionUnits = useSelector(state => state.descriptionUnits);

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th key="name" scope="col">Name</th>
                        <th key="description"scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {descriptionUnits.map((descriptionUnit, index) => {
                        return(
                        <tr key={index}>
                            <td key={index + "_name"}>{descriptionUnit.name}</td>
                            <td key={index + "_description"}>{descriptionUnit.description}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
            <button type="button" onClick={() => {history.push("/addNew")}}>Add new DU</button>
        </>
    );
}

export default Summary;