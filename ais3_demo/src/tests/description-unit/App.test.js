import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../../redux/store";
import "@testing-library/jest-dom";
import App from "../../App";
import userEvent from '@testing-library/user-event';
import { checkNewDUCreationFormExistence } from '../helpers/commonFunctions'

test("6: user can add new description unit", async () => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    let rowGroups = screen.queryAllByRole("rowgroup");
    expect(rowGroups[1]).toBeEmptyDOMElement();


    let summaryButton = screen.getByRole("button");
    expect(summaryButton).toBeVisible();
    userEvent.click(summaryButton);

    let formFields = screen.getAllByRole("textbox");
    expect(formFields.length).toEqual(2);
    let formButton = screen.getByRole("button");
    expect(formButton).toBeVisible()

    let DUNameInput = "Sample new DU";
    let DUDescriptionInput = "Sample DU description";
    userEvent.type(formFields[0], DUNameInput);
    userEvent.type(formFields[1], DUDescriptionInput);
    userEvent.click(formButton);

    let table = screen.getByRole("table");
    expect(table).toBeVisible();
    expect(table).toHaveTextContent(DUNameInput);
    expect(table).toHaveTextContent(DUDescriptionInput);
})

test("5: add new button in summary component takes the user to the createDU view", async () => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    let button = screen.getByRole("button");
    userEvent.click(button);

    checkNewDUCreationFormExistence();
});