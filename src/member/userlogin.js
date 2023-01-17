import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function UserLogin() {
  const navigate = useNavigate()

  const [mbData, setMbData] = useState({
    email: '',
    password: '',
  })

  async function userlogin() {
    const loginapi = 'http://localhost:3008/member/login'
    const { data } = await axios.post(loginapi, mbData)
    if (data.success) {
      //設定進localstorage
      localStorage.setItem('auth', JSON.stringify(data))
      //設定進usecontext
      alert('登入成功') // alert登入成功
      //   navigate('/')
    } else {
      alert('登入失敗')
      localStorage.removeItem('auth')
    }
    console.log(data)
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-700">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold text-amber-500 ">YUMMee</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl tracking-tight text-white">
              登入會員
            </h2>

            <div className="font-medium flex justify-center text-white">
              Sign in to your account
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="請輸入E-mail"
                  onChange={(e) => {
                    const email = e.target.value
                    setMbData({ ...mbData, email: email })
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="請輸入密碼"
                  onChange={(e) => {
                    const password = e.target.value
                    setMbData({ ...mbData, password: password })
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  to={'/sign'}
                  className="font-medium text-amber-600 hover:text-amber-500"
                >
                  不是會員?點我註冊
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-500 py-2 px-4 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault()
                  userlogin()
                }}
              >
                確認登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
