import { screen } from '@testing-library/react';

function checkNewDUCreationFormExistence(){
    let formFields = screen.getAllByRole("textbox");
    expect(formFields.length).toEqual(2);

    expect(screen.getByRole("button")).toBeVisible()
}

export { checkNewDUCreationFormExistence };