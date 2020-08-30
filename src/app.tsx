import * as React from 'react'
import CreateTodoForm from './components/createTodoFrom'
import TodoList from './components/todoList'

const App = () => {
  return (
    <div>
      <CreateTodoForm />
      <TodoList />
    </div>
  )
}

export default App
