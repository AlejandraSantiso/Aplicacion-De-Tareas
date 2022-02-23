import './styles.css';

import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';

export const todoList=new TodoList();



// const tarea=new Todo('Aprender Javascript');

// todoList.nuevoTodo(tarea);

// console.log(todoList);


// crearTodoHtml(tarea);

localStorage.setItem('mi-key','');
localStorage.removeItem('mi-key');  




//solo se puede almacenar string

// Pone el setTimeout para visualizar que al pasar un tiemo se elimina 
// la información


// setTimeout(() => {
    
// }, timeout);



