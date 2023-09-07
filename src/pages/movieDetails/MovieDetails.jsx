import  {useEffect, useState} from "react"
import './moviedetails.css'
import { Link, useParams } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { DataState } from "../../components/context/Context"
const MovieDetails = () => {
  const { state, dispatch } = DataState();

  const { id } = useParams();
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    (async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
          {
            headers,
          }
        );
        if (!res.ok) {
          throw new Error(`API Failed Status ${res.status}`);
        }
        const data = await res.json();
        setproductData(data.data);
      } catch (e) {
        return;
      }
    })();
  }, [id]);
  if (!productData.keywords) {
    return;
  }
     console.log(state.cart)
    return (
        <> 
        <Navbar/>
        <div className="conatiner1">
        {/* <img src={currentMovieDetail.thumbnail} alt=""/> */}
        
        <img src={productData.thumbnail} className="img2"/>
        <h1 style={{color:"#fff"}} className="h4">{productData.type} :  {productData.title}</h1>
        <h1 style={{color:"#fff"}} className="h4">Cast : {productData.cast}</h1>

        <h2 style={{color:"#fff",padding:"0px 10px",margin:"5px"}}> Description : {productData.description}</h2>
        <div class="button-container">
          
          <Link to={`/Video/${productData._id}`}>
    <button className="btn3">Play</button>
    </Link>
    {state.cart.some((pro) => pro._id === productData._id) ? (
        <button className="btn3 remove" onClick={() =>
            dispatch({
                type: "REMOVE_TO_LIST",
                payload: productData,
            })}>- Remove</button>
    ) : (
            <button className="btn3 add" onClick={() =>
                dispatch({ type: "ADD_TO_LIST", payload: productData })
            }>+ WatchList</button>
        )}
</div>
       
        </div>
        <Footer/>
        </>
    )
}

export default MovieDetails