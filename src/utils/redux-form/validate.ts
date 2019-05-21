interface Values {
  username?: string;
  email?: string;
  password?: string;
  password1?: string;
  password2?: string;
  theme?: string,
}

export const validate = (values: Values) => {
  const errors: Values = {};
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
  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 5) {
    errors.password1 = 'Must be 5 characters or more'
  }
  if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2.length < 5) {
    errors.password2 = 'Must be 5 characters or more'
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'Your passwords is not equal'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.theme) {
    errors.theme = 'Required'
  }
  return errors
}