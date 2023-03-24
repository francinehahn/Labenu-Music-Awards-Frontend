export const validateName = (name: string) => /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/.test(name)
export const validateEmail = (email: string) => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword = (password: string) => /.{8,}/.test(password)
