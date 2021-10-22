import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from "../../App";
import userEvent from '@testing-library/user-event';
import CreateDU from "../../components/createDU";

test("new description unit creation form with fields is displayed", async () => {
    render(<CreateDU/>);
    let form = screen.getAllByRole("textbox");
    expect(form.length).toEqual(2);
})

test("add new button in summary component takes the user to the createDU view", async () => {
    render(
        <App/>
    );

    let button = screen.getByText("Add new DU");
    userEvent.click(button);
    let form = screen.getAllByRole("textbox");
    expect(form.length).toEqual(2);
})