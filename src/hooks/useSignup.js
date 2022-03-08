import {useState} from 'react'

import {auth} from '../firebase/config'


function useSignup() {

  const [error, setError] = useState(null)

  const signup = (email, password) => {
    setError(null)
  }

  return (
    <div>useSignup</div>
  )
}

export default useSignup