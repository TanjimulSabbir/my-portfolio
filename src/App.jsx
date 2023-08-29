import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home'
import Introduction from './Components/Pages/Intro/Introduction'

function App() {

  return (
    <div className='max-w-[1460px] mx-auto min-h-screen'>
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/NCN77x3/photo-1606066352252-93e4d325787b-ixlib-rb-4-0.jpg')" }}>
        <Header />
        <Introduction />
      </div>
      <Home />
    </div>
  )
}

export default App
