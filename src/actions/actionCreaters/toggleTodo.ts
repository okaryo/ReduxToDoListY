import { TOGGLE_TODO } from '../actionTypes'

export default function toggleTodo(id: string) {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}