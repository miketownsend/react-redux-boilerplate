import t from './/* @echo CAPITALIZED_NAME */.i18n'

export default (values) => {
  const errors = {}

  const { name } = values

  if (!name) {
    errors.name = t('common.validation.required')
  } else {
    if (name.length < 5) {
      errors.name = t('common.validation.minLength', null, 5)
    }
  }

  return errors
}
