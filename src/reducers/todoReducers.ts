import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/actionTypes'

interface Action {
  type: string
  payload: string
}

const initialState = [
  {
    id: 'study_id',
    name: 'study',
    completed: false
  },
  {
    id: 'parchase_id',
    name: 'buy food',
    completed: false
  }
]

const todos = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: `${action.payload}_id`,
          name: action.payload,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
