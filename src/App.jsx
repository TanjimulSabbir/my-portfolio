import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Introduction from "./Components/Pages/Intro/Introduction";
import ScrollToTopButton from "./Components/Shared/ScrollUp";
import "./style/animation.css";
import bg from "./assets/Photos/About/landscape-scenery-peak-hill-famous.jpg";

function App() {
  return (
    <div className="bg-[#000000c7]">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-[#000000e5] w-full h-full"></div>
        <div className="absolute inset-0 max-w-[1460px] mx-auto flex flex-col items-center justify-center text-white">
          <Header />
          <Introduction />
        </div>
      </div>
      <Home />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
