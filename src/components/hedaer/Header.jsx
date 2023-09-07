import { useRef } from "react";
import { FaBars, FaBell, FaHome, FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
	const navRef = useRef();
   const navigate = useNavigate();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
   const handleSub = () =>{
    alert("Please Login Now")
   }
    const handleHome = () =>{
      alert("Please Login Now")
    }

	return (
		<header>
      <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" className="lmg"/>
			
			<nav ref={navRef}>
				<div className="flex">
			<FaHome/>
				<a href="" onClick={handleHome}>
        
          Home</a>
		  </div>
				<div className="flex">
		  <FaPlus/>
				<a href=""onClick={handleHome}>
         
           WatchList </a>
		   </div>
				<div className="flex">
		   <FaSearch/>
				<a href=""onClick={handleHome}>
          
          Search</a>
		  </div>
				<div className="flex">
				<FaBell/>
				<a href="" onClick={handleSub}>
         
          Subscription</a>
		  </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      
		</header>
	);
}

export default Header;