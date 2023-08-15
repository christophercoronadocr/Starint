import { Alert } from '@material-tailwind/react'
import React from 'react'

export const ErroresAlert = ({ error }) => {
  return (
    <Alert color='red'>{error}</Alert>
  )
}


export default ErroresAlert;
