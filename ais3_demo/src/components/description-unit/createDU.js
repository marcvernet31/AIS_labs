import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CREATE_DU } from "../../redux/actions/types"

const CreateDU = () => {

    let history = useHistory();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: CREATE_DU,
            payload: {name: name, description: description}
        });
        history.push("/")
    }

    return(
        <>
            <form>
                <div>
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descriptionInput">Description</label>
                    <input id="descriptionInput" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <button type="button" onClick={() => handleClick()}>Submit</button>
            </form>
        </>
    );
}

export default CreateDU;