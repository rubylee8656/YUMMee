import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/cartCard'
import { Link, useNavigate } from 'react-router-dom'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'

const pay = [
  {
    way: '現金',
  },
  {
    way: '信用卡',
  },
  {
    way: 'LinePay',
  },
]

export default function Cart() {
  const { myAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => state.cart)

  //總金額狀態
  const [totalPrice, setTotalPrice] = useState(0)

  // 付款方式狀態
  const [payWay, setPayWay] = useState('現金')

  const CountPrice = () => {
    let total = state.cart.reduce((a, b) => {
      return a + b.product_price * b.amount
    }, 0)
    setTotalPrice(total)
  }

  const handleSubmit = async () => {
    if (state.cart.length > 0) {
      const orders = state.cart.map((e) => {
        return { sid: e.sid, amount: e.amount }
      })
      const { data } = await axios.post('http://localhost:3008/cart/neworder', {
        orders,
        mb_sid: myAuth.mb_sid,
        payWay,
      })
      console.log(data)
      if (data.output.success) {
        localStorage.removeItem('cart')
        alert('結帳成功')
        navigate('/cart/orders')
      } else {
        alert('結帳失敗')
        console.log(data.output)
      }
    }
  }

  useEffect(() => {
    CountPrice()
  }, [state.cart])

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }

  return (
    <div
      className="flex flex-col shadow-xl items-center"
      style={{ backgroundColor: '#273F41' }}
    >
      <div className="lg:px-36 flow-root w-full px-6">
        <ul className="my-6 divide-y divide-white">
          {state.cart.map((v, i) => (
            <CartCard data={v} key={i} />
          ))}
        </ul>
      </div>
      <div className="w-full px-6 lg:px-36">
        <div className="flex justify-between text-base font-medium text-white border-t border-white border-solid py-6">
          <p className="text-xl font-bold">金額總計 :</p>
          <p className="text-xl font-bold">${totalPrice}</p>
        </div>
        <div className="flex justify-between items-center pb-6">
          <h3 className="text-white text-xl font-bold">付款方式 :</h3>

          <RadioGroup value={payWay} onChange={setPayWay}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="flex space-x-2">
              {pay.map((v, i) => {
                return (
                  <RadioGroup.Option
                    key={i}
                    value={v.way}
                    className={({ active, checked }) =>
                      `${
                        checked
                          ? 'bg-white'
                          : 'bg-neutral-700 bg-opacity-75 text-white'
                      }
                      flex cursor-pointer rounded-lg py-2 px-6 focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-gray-900' : 'text-white'
                              }`}
                            >
                              {v.way}
                            </RadioGroup.Label>
                          </div>
                          {checked && (
                            <div className="text-gray-900">
                              <CheckIcon className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                )
              })}
            </div>
          </RadioGroup>
        </div>
        <div className="flex justify-between pb-12 items-end">
          <Link
            to={'/product/'}
            className="font-medium text-amber-600 hover:text-amber-500"
          >
            繼續逛逛
            <span aria-hidden="true"> &rarr;</span>
          </Link>
          <button
            className="bg-amber-600 py-3 rounded-md text-white hover:bg-amber-500 w-1/3"
            onClick={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            確認送出訂單
          </button>
        </div>
      </div>
    </div>
  )
}
