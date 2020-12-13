import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';


describe("Alert", () => {

    it('confirm error being flagged if post does not complete', () => {
        const component = render(<Alert message="Error!" />);
        const alertMessageNode = component.getByText("Error!")

        expect(alertMessageNode.textContent).toBe('Error!');
    });

    it("displays message if a success", () => {
        const component = render(<Alert message="Success!!!!" success />);
        const alertMessageNode = component.getByText("Success!!!!")
      
        expect(alertMessageNode.textContent).toBe("Success!!!!");
    });

    it("no error if property added successfully", () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();

        expect(alert).toMatchSnapshot();
    });

    it("display error message if property not added successfully", () => {
        const { getByText, asFragment } = render(<Alert message="Error!" />);

        expect(asFragment()).toMatchSnapshot();
        expect(getByText(/Error/).textContent).toBe("Error!");
    });

    it("display success message if property is added successfully", () => {
        const { getByText, asFragment } = render(<Alert message="Success!!!!" />);

        expect(asFragment()).toMatchSnapshot();
        expect(getByText(/Success/).textContent).toBe("Success!!!!");
    });
});