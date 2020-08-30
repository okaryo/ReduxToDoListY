import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Todo from './todo'
import toggleTodo from '../actions/actionCreaters/toggleTodo'

interface State {
  todos: {
    id: string
    name: string
    completed: boolean
  }[]
}

interface Props {
  todos: {
    id: string
    name: string
    completed: boolean
  }[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <Todo key={todo.id} {...todo} />
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return {todos: state.todos}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(mapStateToProps)(TodoList)
