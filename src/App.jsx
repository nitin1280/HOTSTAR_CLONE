import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/hedaer/Header'
import Login from './components/Login/Login'
import Sign from "./pages/register/Sign";
import Home from "./pages/home/Home";
import Prime from "./pages/prime/Prime";
import AllDetail from "./pages/AllDetail/AllDetail";
import Search from "./components/search/Search";
import WatchList from "./components/watchList/WatchList";
import Video from "./pages/video/Video"

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
     
    <Routes>
    
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Sign/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/:id" element={<AllDetail />}/>
    <Route path="/Prime" element={<Prime/>}/>
    <Route path="/allmovie" element={<Search/>}/>
    <Route path="/WatchList" element={<WatchList/>}/>
    <Route path="/Video/:url" element={<Video/>}/>
  
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App