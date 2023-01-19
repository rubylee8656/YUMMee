// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './model/cartSlice'
import { Provider } from 'react-redux'

//components
import Navbar from './components/navbar'
import Footer from './components/footer'

//homepage
import Homepage from './home/homepage'

//product
import ProductList from './product/productList'
import ProductDetail from './product/productDetail'

//member
import UserSign from './member/usersign'
import UserLogin from './member/userlogin'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            {/* homepage */}
            <Route path="/" element={<Homepage />} />
            {/* shop */}
            {/* <Route index path="/shop" /> */}
            {/* product */}
            <Route path="/product/">
              <Route index path="" element={<ProductList />} />
              <Route path=":sid" element={<ProductDetail />} />
            </Route>
            {/* member */}

            <Route path="/sign" element={<UserSign />} />
            <Route path="/login" element={<UserLogin />} />

            {/* cart */}
            {/* <Route index path="/cart" /> */}
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
