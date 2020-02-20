import React from 'react';
import { render } from '@testing-library/react';

import Todos from './todos';
import { Todo } from '@reactapps/data';

describe(' Todos', () => {
  it('should render successfully', () => {
    const todos: Todo[] = [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }];
    const { baseElement } = render(<Todos todos={todos} />);
    expect(baseElement).toBeTruthy();
  });
});
