import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home'
import Introduction from './Components/Pages/Intro/Introduction'

function App() {

  return (
    <div className='max-w-[1460px] mx-auto min-h-screen'>
      <div className="max-h-screen text-white relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/WkTpTXN/photo-1551301622-6fa51afe75a9-ixlib-rb-4-0.jpg')" }}>
        <Header />
        <Introduction />
      </div>
      <Home />
    </div>
  )
}

export default App
