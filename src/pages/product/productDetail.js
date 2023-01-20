import { useState, useEffect } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { RadioGroup } from '@headlessui/react'
import axios from 'axios'
import { serverUrl } from '../../my-config'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../model/cartSlice'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  // 記錄原始資料用
  const [product, setProduct] = useState([])
  //商品數量的狀態 之後要放入購物車
  const [amount, setAmount] = useState(0)
  //解構路由的sid 用於跟後端要資料的時候要帶入的東西
  const { sid } = useParams()
  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => {
    return state.cart
  })
  //要使用store裡面的action的時候要用到的hooks
  const dispatch = useDispatch()

  //加入購物車按鈕
  const handleCart = () => {
    const { product_price, product_name, picture_url } = product[0]
    // console.log(product[0])
    // console.log(sid, product_name, product_price, picture_url, amount)
    dispatch(addCart({ sid, product_name, product_price, picture_url, amount }))
  }

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3008/product/${sid}`)
      // console.log(response.data.product_rows)
      setProduct(response.data.product_rows)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className=" p-8" style={{ backgroundColor: '#273F41' }}>
      {product.map((v, i) => {
        return (
          <div
            className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"
            key={v.sid}
          >
            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={serverUrl + `/images/product/${v.picture_url}`}
                alt={v.product_name}
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-white sm:pr-12">
                {v.product_name}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-white">${v.product_price}</p>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-white">
                      {v.product_description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => {
                      if (amount > 0) {
                        setAmount(amount - 1)
                      }
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
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={amount}
                    onChange={(e) => {
                      setAmount(+e.target.value)
                    }}
                  />

                  <button
                    onClick={() => {
                      setAmount(amount + 1)
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
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-500 py-3 px-8 text-base font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  onClick={() => {
                    handleCart()
                  }}
                >
                  加入購物車
                </button>
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}
