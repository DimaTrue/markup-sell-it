export const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required'
  } else if (values.confirmpassword.length < 5) {
    errors.confirmpassword = 'Must be 5 characters or more'
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = 'Your passwords is not equal'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}