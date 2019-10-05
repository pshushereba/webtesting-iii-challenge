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

test("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Display />);
  
    const open = getByText(/open/i);
    const locked = getByText(/unlocked/i);
  
    expect(open).toBeDefined();
    expect(locked).toBeDefined();
  });

  test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
      const closed = true;

      const toggleClosed = () => {
          return !closed;
      }

      const {getByText, findByText} = render(<Display closed={closed} />);

      const closedLed = getByText(/closed/i);
      expect(closedLed).toBeDefined();

      toggleClosed();

      const openLed = findByText(/open/i);
      expect(openLed).toBeDefined();
  });

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const locked = true;

    const toggleLocked = () => {
        return !locked;
    }

    const {getByText, findByText} = render(<Display locked={locked} />);

    const lockedLed = getByText(/locked/i);
    expect(lockedLed).toBeDefined();

    toggleLocked();

    const unlockedLed = findByText(/unlocked/i);
    expect(unlockedLed).toBeDefined();
});

test("when `locked` or `closed` use the `red-led` class", () => {
    const { container } = render(<Display locked={true} closed={true} />);

    const ledList = container.querySelectorAll(".red-led");
  
    expect(ledList.length).toBe(2);
});