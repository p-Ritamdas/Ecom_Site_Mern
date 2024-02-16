{/*
frontend> npm install 
@testing-library/react 
react-test-renderer 
jest-dom –save-dev
*/}
import React from "react";
import Product from "../Product";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('Testing Product Component', () => {
    it('Test Case 1, Should have exact Text', () => {
        const { getByTestId } = render(<Product label="click me"></Product>);
        expect(getByTestId('heading')).toHaveTextContent("click me");
    });

    it('Test Case 2, Testing Product Name Match', () => {
        const { getByTestId } = render(<Product name="oneplus"></Product>);
        expect(getByTestId('productName')).toHaveTextContent("oneplus");
    })

    it('Test Case 3, Testing Type', () => {
        const { getByTestId } = render(<Product label="click me"></Product>);
        expect(typeof getByTestId('heading')).toBe('object');
    })
});