import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Todo } from '../reducers/index'
import toggleTodo from '../actions/actionCreaters/toggleTodo'

interface Props {
  id: string
  name: string
  completed: boolean
  toggleTodo: (id: string) => {type: string, payload: typeof id}
}

const Todo: React.FC<Props> = ({ id, name, completed, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(id)}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name}
    </li>
  )
}

const mapStateToProps = (state: {}) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: string) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
