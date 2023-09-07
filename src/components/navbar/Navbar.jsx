// import {
// 	faUser,
//   } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { FaBars, FaBell, FaHome, FaPlus, FaSearch, FaSign, FaSignOutAlt, FaTimes, FaUser } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const userName = (localStorage.getItem("nameData"));
	const navRef = useRef();
  
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
      const navigate = useNavigate();
	const handleLogout = () =>{
		alert("Logout Your Account👍");
		navigate("/");
	}


	return (
		<header>
      <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" className="lmg"/>
			
			<nav ref={navRef}>
				
			  <Link to={"/home"}>
			  <div className="flex">
			  <FaHome/>
				<a href="">
             
             Home</a>
			 </div>
		     </Link>
				<Link to={'/WatchList'}>
				<div className="flex">
				<FaPlus/>
				<a href="">
             
              WatchList </a>
			  </div>
				</Link>
				<Link to={"/allmovie"}>
					<div className="flex">
				<FaSearch/>
				<a href="">
             
              Search</a>
			  </div>
		     </Link>
		      <Link to={'/Prime'}>
			  <div className="flex">
			  <FaBell/>
				<a href="">
             
               Subscription</a>
			   </div>
		       </Link>
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
			  <FaUser />
			 <div className="user">{userName}</div>
			
			 <FaSignOutAlt style={{cursor:"pointer"}} onClick={handleLogout}/>
			
			 
		</header>
	);
}

export default Navbar;