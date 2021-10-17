import { CREATE_DU } from "../actions/types"
const initialState = [];

function descriptionUnits(descriptionUnits = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_DU:
            return [...descriptionUnits, payload];
        default:
            return descriptionUnits;
    }
}

export default descriptionUnits;