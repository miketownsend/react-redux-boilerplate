import { connect } from 'react-redux'

import FormComponent from '../../forms//* @echo CAPITALIZED_NAME */'

import { submit, load } from './actions'
import { getMethod } from './selectors'

const mapDispatchToProps = {
  onSubmit: submit,
  load: load
}

const mapStateToProps = (state, props) => {
  const method = getMethod(state) || {}
  return {
    methodId: props.params.method_id,
    method: { name: method.name, description: method.description }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
