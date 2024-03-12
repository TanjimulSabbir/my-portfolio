import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home'
import Introduction from './Components/Pages/Intro/Introduction'
import ScrollToTopButton from './Components/Shared/ScrollUp'
import sky from "./assets/Photos/About/Stars.png"

function App() {

  return (
    <div className='max-w-[1460px] mx-auto'>
      <div className="bg-cover bg-center bg-no-repeat bg-black" style={{ backgroundImage: `url(${sky})` }}>
        <Header />
        <Introduction />
      </div>
      <Home />
      <ScrollToTopButton/>
    </div>
  )
}

export default App
