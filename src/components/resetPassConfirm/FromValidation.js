export default (values) => {
  const errors = {}
  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 6) {
    errors.password1 = 'minimum of 6 characters'
  }

  if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'password not match'
  }
}