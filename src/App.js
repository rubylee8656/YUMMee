// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'

import Navbar from './components/navbar'
import Footer from './components/footer'

//homepage
import Homepage from './home/homepage'

//member
import UserSign from './member/usersign'
import UserLogin from './member/userlogin'

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
      <AuthContextProvider>
        <Navbar />
        <Routes>
          {/* homepage */}
          <Route path="/" element={<Homepage />} />
          {/* shop */}
          {/* <Route index path="/shop" /> */}
          {/* product */}
          {/* <Route index path="/product" /> */}
          {/* member */}
          <Route path="/sign" element={<UserSign />} />
          <Route path="/login" element={<UserLogin />} />
          {/* cart */}
          {/* <Route index path="/cart" /> */}
        </Routes>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
