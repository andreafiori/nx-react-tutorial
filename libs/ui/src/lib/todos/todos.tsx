import React from 'react';
import { Todo } from '@reactapps/data';

import './todos.scss';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {
        props.todos.map(t => <li className={'todo'} key={t.id}>{t.title} !!</li>)
      }
    </ul>
  );
};

export default Todos;