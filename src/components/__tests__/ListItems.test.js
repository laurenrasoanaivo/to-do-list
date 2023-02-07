import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItems from '../ListItems';

test('renders a list item with the correct text', () => {
  render(<ListItems index={1} item="item 1" />);
  const listItem = screen.getByTestId('list-item');
  expect(listItem).toHaveTextContent('item 1');
});
