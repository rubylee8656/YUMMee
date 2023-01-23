import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'
import dayjs from 'dayjs'

export default function OrderHistory() {
  const { myAuth } = useContext(AuthContext)

  const [getorder, setGetOrder] = useState([])

  const getOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3008/cart/getorder/${myAuth.mb_sid}`
      )
      for (let i = 1; i < response.data.getorder_rows.length; i++) {
        response.data.getorder_rows[i].ordered_at = dayjs(
          response.data.getorder_rows[i].ordered_at
        ).format('YYYY-MM-DD HH:MM')
      }
      // console.log(response.data.product_rows)
      setGetOrder(response.data.getorder_rows)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
    }
  }
  useEffect(() => {
    getOrder()
  }, [])

  return (
    <div
      className=" py-12 px-4 lg:px-36"
      style={{ backgroundColor: '#273F41' }}
    >
      {getorder.map((v, i) => {
        return (
          <div className="mx-auto w-full rounded-2xl bg-white">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>訂單編號 : {v.order_num}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <p>訂單編號 : {v.order_num}</p>
                    <p>金額總計 : {v.total_price}</p>
                    <p>付款方式 : {v.pay_way}</p>
                    <p>訂單時間 : {v.ordered_at}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        )
      })}
    </div>
  )
}
