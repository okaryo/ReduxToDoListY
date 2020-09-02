import { ADD_TODO } from '../actionTypes'

export default function addTodo(name: string) {
  return {
    type: ADD_TODO,
    payload: name
  }
}
