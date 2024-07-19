import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './utilitis/Header/Header'
import Mainrouting from './MainRouting/Mainrouting'
import Footer from './utilitis/Footer/Footer'
// import Gallery from './component/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
            <Header />
            <Mainrouting />
            {/* <Gallery /> */}

            <Footer />
       </>
  );
}

export default App
