import { combineReducers } from 'redux'
import { reducer as formReuducer } from 'redux-form'
import todos from './todoReducers'

export interface Todo {
  id: string
  name: string
  completed: boolean
}

const rootReducers = combineReducers({
  form: formReuducer,
  todos: todos
})

export default rootReducers
