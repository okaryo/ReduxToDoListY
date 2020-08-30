import { combineReducers } from 'redux'
import todos from './todoReducers'

export interface Todo {
  id: string
  name: string
  completed: boolean
}

const rootReducers = combineReducers({ todos })

export default rootReducers
