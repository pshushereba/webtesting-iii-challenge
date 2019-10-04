// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';
import * as extend from 'jest-dom/extend-expect';

test("It should render correctly", () => {
    const {getByText} = render(<Controls />)
    getByText(/close gate/i);
});

test("It cannot be closed or opened if it is locked", () => {
    const mockToggleLocked = jest.fn();
    const mockToggleClosed = jest.fn();
    
    const { getByText } = render(<Controls 
        locked={true}
        closed={true}
        toggleLocked={mockToggleLocked}
        toggleClosed={mockToggleClosed} />);
    
    const openBtn = getByText(/open gate/i);

    expect(openBtn).toBeDisabled();
});

test("Check state of door when close gate button clicked",  () => {
    const mockClose = jest.fn();
    const mockLock = jest.fn();

    const {getByText, findByText} = render(<Controls />);

    fireEvent.click(getByText(/close gate/i));
    // expect(mockClose).toHaveBeenCalled();
    // getByText(/close gate/i);
});