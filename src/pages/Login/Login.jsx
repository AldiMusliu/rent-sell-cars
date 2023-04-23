import { useState } from 'react'
import NoteAlert from '../../components/NoteAlert/NoteAlert'
import LoginForm from '../../components/Login/Login'
import { api, endpoints} from '../../lib/api/'


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
    <div className="login">
      <div className="loginComponent">
        <h1>Login</h1>
        <NoteAlert variant={'danger'}>{errorMessage}</NoteAlert>
        <LoginForm setMessage={setErrorMessage} submit={submit} /> 
      </div>
    </div>
  )
}

export default Login;
