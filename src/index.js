import './styles.css';
import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';


export const todoList=new TodoList();
const tarea=new Todo ('Aprender JavaScrip');
todoList.nuevoTodo(tarea);

console.log (todoList);




crearTodoHtml(tarea);