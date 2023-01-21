import TodoCard from "./ToDoCard"

import classes from './components.module.css'

const ToDoList = ({ todoList, editTodo, deleteTodo }) => {

  return (
    <div className={classes.flexList}>
      {todoList.map((todo) => 
        <TodoCard todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}

export default ToDoList