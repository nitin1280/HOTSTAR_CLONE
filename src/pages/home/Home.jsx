import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/slider/Carousel'
import Viewers from '../../components/Viewer/Viewer'
import Api from '../../components/api/Api';
import Footer from '../../components/footer/Footer';
import { DataState } from '../../components/context/Context';

const Home = (props) => {
 
  const{state} = DataState();
  const products = state.products
  console.log(state.products)

  return (
    <div>
     <Navbar/>
     <span></span>
     <Carousel/>
     <Viewers/>
     <span></span>
     <Api query={"trailer"} title={"Trending"} data = {products} />
      <Api query={"web series"} title={"Web Series"} data = {products}/>;
      <Api query={"tv show"} title={"Tv Show"} data = {products} />;
      <Api query={"short film"} title={"Short Film"} data = {products}/>;
      <Api query={"movie"} title={"Movies"}  data = {products}/>
      <Api query={"documentary"} title={"Documentary"} data = {products}/>
      <Api query={"video song"} title={"Videosong"} data = {products}/>
      <Footer/>
    </div>
  )
}

export default Home