import axios from 'axios'
import { useState, useEffect } from 'react'
import { serverUrl } from '../../my-config'
import { Link } from 'react-router-dom'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt:
//       'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt:
//       'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt:
//       'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt:
//       'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   // More products...
// ]

export default function ProductList() {
  // 記錄原始資料用
  const [product, setProduct] = useState([])

  const getProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3008/product/list')
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
    <div className="" style={{ backgroundColor: '#273F41' }}>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((v, i) => {
            return (
              <div key={v.sid} className="group">
                <div
                  className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8"
                  style={{ backgroundColor: '#273F41' }}
                >
                  <Link to={`/product/${v.sid}`}>
                    <img
                      src={serverUrl + `/images/product/${v.picture_url}`}
                      alt={v.product_name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </Link>
                </div>
                <h3 className="mt-4 text-sm text-white">{v.product_name}</h3>
                <p className="mt-1 text-lg font-medium text-white">
                  ${v.product_price}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
