import React from "react";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../../redux/store";
import "@testing-library/jest-dom";
import CreateDU from "../../components/description-unit/createDU";
import { checkNewDUCreationFormExistence } from '../helpers/commonFunctions'

test("4: new description unit creation form with fields and submit button is displayed", async () => {
    render(
        <Provider store={store}>
            <CreateDU/>
        </Provider>
    );
    checkNewDUCreationFormExistence();
});
