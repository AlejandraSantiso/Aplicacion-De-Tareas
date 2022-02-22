import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        this.todos=[];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){

        this.todos=this.todos.filter(todo => todo.id!=id);
        
    }

    marcarCompletado(id){

        for (let i=0;i<this.todos.length;i++){
            
           //const todo=this.todos[i];

            if (id==this.todos[id].id){
                 this.todos[i].completado=!this.todos[i].completado;

                break;
            }

            console.log(this.todos[i]);
        }
    };

    eliminarCompletados(){

        this.todos=this.todos.filter(todo => !todo.completado);

    }
}