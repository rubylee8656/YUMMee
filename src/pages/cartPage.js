import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, incrementCart, decrementCart } from '../model/cartSlice'
import { serverUrl } from '../my-config'
import CartCard from '../components/cartCard'

export default function Cart() {
  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  //總金額狀態
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let total = state.cart.reduce((a, b) => {
      return a + b.product_price * b.amount
    }, 0)
    setTotalPrice(total)
  }, [state.cart])

  return (
    <div
      className="flex flex-col shadow-xl items-center"
      style={{ backgroundColor: '#273F41' }}
    >
      <div className="lg:px-36 sm:px-6 flow-root w-full">
        <ul className="my-6 divide-y divide-white">
          {state.cart.map((v, i) => (
            <CartCard data={v} key={i} />
          ))}
        </ul>
      </div>
      <div className="w-full sm:px-6 lg:px-36">
        <div className="flex justify-between text-base font-medium text-white border-t border-white border-solid py-6">
          <p className="text-xl font-bold">金額總計 :</p>
          <p className="text-xl font-bold">${totalPrice}</p>
        </div>
        <div className="flex justify-end pb-12">
          <div className="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-500 cursor-pointer w-1/3">
            確認付款去
          </div>
        </div>
      </div>
    </div>
  )
}
