import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';


describe("PropertyCard", () => {

    it('renders the props into PropertyCard', () => {
        
        const { getByText, getByTestId } = render(
            <PropertyCard 
                title='mockTitle'
                type='Flat'
                bathrooms={3}
                bedrooms={3}
                price={150000}
                city='Manchester'
                email='joeBloggs@outlook.com'
            />
        )

        console.log(PropertyCard)

        expect(getByText('mockTitle')).toBeTruthy();
        expect(getByText('Flat')).toHaveClass('type');
        expect(getByText('Location: Manchester')).toHaveClass('city');
        expect(getByTestId('bathrooms-id')).toHaveClass('bathrooms');
        expect(getByTestId('bedrooms-id')).toHaveClass('bedrooms');
        expect(getByTestId('email-id')).toHaveClass('emailButton');
    })
});