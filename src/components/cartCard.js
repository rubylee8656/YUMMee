import { serverUrl } from '../my-config'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, incrementCart, decrementCart } from '../model/cartSlice'

const CartCard = (prop) => {
  const { sid, product_name, product_price, picture_url, amount } = prop.data
  const dispatch = useDispatch()
  return (
    <li key={sid} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md mr-3">
        <img
          src={serverUrl + `/images/product/${picture_url}`}
          alt={product_name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex sm:flex-1 sm:flex-col lg:flex-row items-center font-medium text-white grid grid-cols-4">
        <h3 className="flex justify-center">{product_name}</h3>
        <p className="flex justify-center">${product_price}</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              dispatch(decrementCart({ sid }))
            }}
          >
            <svg
              className="fill-current text-white w-3 mx-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>

          <input
            className="mx-2 border text-center w-8 text-black"
            type="text"
            value={amount}
            onChange={(e) => {}}
          />

          <button
            onClick={() => {
              dispatch(incrementCart({ sid }))
            }}
          >
            <svg
              className="fill-current text-white w-3 mx-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <p className="flex justify-center">${product_price * amount}</p>
      </div>
      <div className="text-sm flex items-center">
        <button
          type="button"
          className="font-medium text-amber-600  hover:text-amber-500"
          onClick={() => {
            dispatch(deleteCart({ sid }))
          }}
        >
          移除
        </button>
      </div>
    </li>
  )
}

export default CartCard
