import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ToDoList from '../ToDoList';
import Input from '../Input';

test('moves an item from the to-do list to the done list when the checkbox is clicked', () => {
  const setDoneList = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <ToDoList setDoneList={setDoneList} />
  );

  const input = getByPlaceholderText("Some to do");
  fireEvent.change(input, { target: { value: 'Test Item' } });

  fireEvent.keyPress(input, { key: "Enter", code: 13 });

  const checkbox = getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(setDoneList).toHaveBeenCalledWith(['Test Item']);
});
