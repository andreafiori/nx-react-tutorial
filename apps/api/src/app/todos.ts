import { Express } from 'express';
import { Todo } from '@reactapps/data';

const todos: Todo[] = [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodoId = Math.floor(Math.random() * 1000);
    const newTodo = {
      id: newTodoId, title: `New todo ${newTodoId}`
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}