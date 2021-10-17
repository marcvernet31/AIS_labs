import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Summary from "../../components/description-unit/summary";

test("1: loads and displays summary table", async () => {
    render(
        <Provider store={store}>
            <Summary/>);
        </Provider>
    );
    expect(screen.getByRole("table")).toBeVisible();
});

test("2: add new button exists", async () => {
    render(
        <Provider store={store}>
            <Summary/>);
        </Provider>
    );
    expect(screen.getByText("Add new DU")).toBeVisible();
});

test("3: table is initially empty", async () => {
    render(
        <Provider store={store}>
            <Summary/>);
        </Provider>
    );
    let rowGroups = screen.queryAllByRole("rowgroup");
    expect(rowGroups[1]).toBeEmptyDOMElement();
});