import { useState } from 'react'
import LoginForm from '../../components/Login/Login'
import { api, endpoints} from '../../lib/api/'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'



const Login = () => {

  const [errorMessage, setErrorMessage] = useState()

  const submit = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoints.login, config)
    if (!result.success) {
      setErrorMessage([result.data])
      return
    }
  }

  return (
    <div className="login ">
      <div className="loginComponent">
        <h1>Login</h1>
        <ErrorAlert variant={'danger'}>{errorMessage}</ErrorAlert>
        <LoginForm setMessage={setErrorMessage} submit={submit} /> 
      </div>
    </div>
  )
}

export default Login;
