import React from "react";

const CreateDU = () => {
    return(
        <>
            <form>
                <div>
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput"/>
                </div>
                <div>
                    <label htmlFor="descriptionInput">Description</label>
                    <input id="descriptionInput"/>
                </div>
                <button type="button">Submit</button>
            </form>
        </>
    );
}

export default CreateDU;