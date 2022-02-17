// Test away
import React from 'react'
import {render} from '@testing-library/react';

import Dashboard from './Dashboard.js';

it("should render dashboard component", () => {
   render(<Dashboard />);
});

it("shows the controls and display", () => {
    const {getByText} = render(<Dashboard />);

    const controls = getByText(/close gate/i);
    const display = getByText(/unlocked/i);

    expect(controls).toBeDefined();
    expect(display).toBeDefined();
});