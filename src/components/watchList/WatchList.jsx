import React from 'react'
import { DataState } from '../context/Context'
import Navbar from '../navbar/Navbar';
import "./watchList.css"
import Footer from '../footer/Footer';

const WatchList = () => {

    const {state} = DataState();
    const product = state.cart; 
    console.log(state.cart)
  return (
    <>
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {
            product.map((item)=>{
                return <div style={{ display: "inline-block",
                  margin: "10px",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  width: "350px"}}>
                     <img src={item.thumbnail} alt='' style={{width:"100%",height:"auto"}}/> 
                    <h1 style={{marginTop:"10px",fontSize:"1.5rem",color:"#fff"}}>{item.title}</h1>
                    <h2 style={{marginTop:"5px",fontSize:"1rem",color:"#fff"}}>{item.description}</h2>
                    <button style={{marginTop: "10px",
  padding: "8px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"}} >Play</button>
                    </div> 
            })
        }
       
        </div>
         <Footer/>
         </>
  )
}

export default WatchList