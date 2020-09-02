import * as React from 'react'
import { Dispatch } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import addTodo from '../actions/actionCreaters/addTodo'

const CreateTodoForm: React.FC<{handleSubmit: any, submitting: any, pristine: any}>= (props) => {
  const { handleSubmit , submitting, pristine } = props
  return (
    <form>
      <Field name="name" component="input" />
      <button onClick={handleSubmit((data: any, dispatch: any) => dispatch(addTodo(data.name)))} disabled={pristine || submitting}>add todo</button>
    </form>
  )
}

export default reduxForm({
  form: 'name'
})(CreateTodoForm)
