import { useState } from 'react'
import NoteAlert from '../../components/NoteAlert/NoteAlert'
import RegisterForm from '../../components/Register/Register'
import { api, endpoints} from '../../lib/api/'


const Register = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')

  const submitRegister = async (data) => {
    setVariant('danger')
    const config = {
      data,
    }
    const result = await api.call(endpoints.register, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }
    setVariant('success')
    setMessage('Please verify your account')
  }

  return (
    <div className={"registerVerifyComponent"}>
      <div className={"register"}>
        <div className={"registerComponent"}>
          <h1>Register</h1>
          <NoteAlert variant={variant}>{message}</NoteAlert>
          {variant !== 'success' && <RegisterForm setMessage={setMessage} submit={submitRegister} />}
        </div>
      </div>
    </div>
  )
}

export default Register;