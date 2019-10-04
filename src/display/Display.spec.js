// Test away!
import React from 'react'
import {render} from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display.js';

test("It should render", () => {
    const {getByText} = render(<Display />);
    getByText(/unlocked/i)
});

test("It should default to unlocked and open", () => {
    const {getByText} = render(<Display locked={false} closed={false} />);

    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);

    expect(unlocked).toHaveClass('green-led');
    expect(open).toHaveClass('green-led');
});

