// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';
import 'jest-dom/extend-expect';

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

test("provide buttons to toggle the closed and locked states.", () => {
    const { getByText } = render(<Controls />);
  
    const closeBtn = getByText(/close gate/i);
    const lockBtn = getByText(/lock gate/i);
  
    expect(closeBtn).toBeDefined();
    expect(lockBtn).toBeDefined();
  });

test("buttons' text changes to reflect the state the door will be in if clicked",  () => {
    const mockClose = jest.fn();
    const closed = true;
    const locked = false;

    const {getByText, findByText} = render(<Controls toggleClosed={mockClose} closed={closed} locked={locked} />);

    const openBtn = getByText(/open gate/i);

    fireEvent.click(openBtn);

    const closeBtn = findByText(/close gate/i);

    expect(closeBtn).toBeDefined();
    expect(mockClose).toHaveBeenCalled();
});

test("the closed toggle button is disabled if the gate is locked", () => {
    const mockClose = jest.fn();
    const closed = true;
    const locked = true;

    const {getByText} = render(<Controls toggleClosed={mockClose} closed={closed} locked={locked} />);

    const openBtn = getByText(/open gate/i);

    expect(openBtn).toBeDisabled();
});

test("the locked toggle button is disabled if the gate is open", () => {
    const mockClose = jest.fn();
    const closed = false;
    const locked = false;

    const {getByText} = render(<Controls toggleClosed={mockClose} closed={closed} locked={locked} />);

    const lockBtn = getByText(/lock gate/i);

    expect(lockBtn).toBeDisabled();
});