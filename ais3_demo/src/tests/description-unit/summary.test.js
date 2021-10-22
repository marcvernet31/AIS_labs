import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Summary from "../../components/summary";

test("loads and displays summary table", async () => {
    render(<Summary/>);
    expect(screen.getByRole("table")).toBeInTheDocument();
});

test("add new button exists", async () => {
    render(<Summary/>);
    expect(screen.getByText("Add new DU")).toBeInTheDocument();
});
