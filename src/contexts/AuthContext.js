import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({})

export default AuthContext

export const AuthContextProvider = function ({ children }) {
  const navigate = useNavigate()
  let unAuth = {
    authorised: false,
    sid: 0,
    email: '',
    token: '',
  }

  let initAuth = { ...unAuth }
  const str = localStorage.getItem('auth')
  if (str) {
    const localAuth = JSON.parse(str)
    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorised: true }
    }
  }

  // //目標把登入狀態傳出去
  const [myAuth, setMyAuth] = useState(initAuth)

  const logout = () => {
    localStorage.removeItem('auth')
    setMyAuth(unAuth)
    alert('登出成功')
    navigate('/')
  }
  return (
    <AuthContext.Provider value={{ myAuth, setMyAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
