// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//homepage
import Homepage from './home/homepage'

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
      <Routes>
        {/* homepage */}
        <Route index path="/" element={<Homepage />} />
        {/* shop */}
        {/* <Route index path="/shop" /> */}
        {/* product */}
        {/* <Route index path="/product" /> */}
        {/* member */}
        {/* <Route index path="/member" /> */}
        {/* cart */}
        {/* <Route index path="/cart" /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
