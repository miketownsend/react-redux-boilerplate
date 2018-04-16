import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import { Button } from 'react-bootstrap'

import SimpleField from '../../components/SimpleField'

import t from './/* @echo CAPITALIZED_NAME */.i18n'

export class /* @echo CAPITALIZED_NAME */ extends React.Component {
  static propTypes = {
    // Props from redux form
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,

    // Loaded from form container
    load: PropTypes.func.isRequired,
    methodId: PropTypes.string.isRequired
  }

  componentDidMount () {
    this.props.load({ methodId: this.props.methodId })
  }

  render () {
    const { handleSubmit, pristine, submitting } = this.props

    return <Form className='/* @echo DASHERIZED_NAME */' onSubmit={handleSubmit}>
      <h3>{t('title')}</h3>
      <hr />
      <Field
        name='name'
        type='text'
        component={SimpleField}
        label={t('fields.name')}
      />
      <Field
        name='description'
        type='text'
        component={SimpleField}
        label={t('fields.description')}
      />
      <hr />
      <Button bsStyle='primary' type='submit' disabled={pristine || submitting}>
        {t('common.action.submit')}
      </Button>
    </Form>
  }
}

export default /* @echo CAPITALIZED_NAME */
