import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function PayConfirm() {
  const location = useLocation()
  const transactionId = new URLSearchParams(location.search).get(
    'transactionId'
  )
  const orderId = new URLSearchParams(location.search).get('orderId')
  //   console.log({ transactionId, orderId })

  async function confirm() {
    const { data } = await axios.get(
      `http://localhost:3008/cart/linepay/confirm?transactionId=${transactionId}&orderId=${orderId}`
    )
    if (data.success) {
      console.log('資料庫完成修改')
    } else {
      console.log(data)
    }
  }

  useEffect(() => {
    confirm()
  }, [])

  return <div>付款成功</div>
}
