import React from "react";

const CreateDU = () => {
    return(
        <>
            <form>
                <div>
                    <label htmlfor="nameInput">Name</label>
                    <input id="nameInput"/>
                </div>
                <div>
                    <label htmlFor="descriptionInput">Description</label>
                    <input id="descriptionInput"/>
                </div>
            </form>
        </>
    );
}

export default CreateDU;