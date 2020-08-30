import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import TodoManager from './TodoManager';

describe('____ TodoManager ____', () => {
  afterEach(cleanup);

  test('Add new todo', () => {
    const {getByA11yLabel} = render(<TodoManager />);
    const newTodoInput = getByA11yLabel('newTodoInput');

    fireEvent.changeText(newTodoInput, 'Wash my hair');
    fireEvent.press(getByA11yLabel('addTodo'));
    const todoText = getByA11yLabel('todoText');
    expect(todoText.props.children).toEqual('Wash my hair');
  });

  test('Add blank todo', () => {
    const {getByA11yLabel, queryByA11yLabel} = render(<TodoManager />);
    const newTodoInput = getByA11yLabel('newTodoInput');

    fireEvent.changeText(newTodoInput, '');
    fireEvent.press(getByA11yLabel('addTodo'));
    const todoText = queryByA11yLabel('todoText');
    expect(todoText).toBeNull();
  });

  test('Delete todo', () => {
    const {queryAllByA11yLabel, getByA11yLabel, getAllByA11yLabel} = render(
      <TodoManager />
    );
    const newTodoInput = getByA11yLabel('newTodoInput');
    const addTodoBtn = getByA11yLabel('addTodo');

    fireEvent.changeText(newTodoInput, 'First todo');
    fireEvent.press(addTodoBtn);
    fireEvent.changeText(newTodoInput, 'First todo');
    fireEvent.press(addTodoBtn);

    const deleteButtons = getAllByA11yLabel('deleteTodoBtn');
    fireEvent.press(deleteButtons[0]);

    const todoText = queryAllByA11yLabel('todoText');
    expect(todoText.length).toEqual(1);
  });
});
