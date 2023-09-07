import { useState,useEffect } from "react";
import "./api.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Api({ query, title,data }) {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredData = data.filter((item) => item.type.includes(query));
    setFilterData(filteredData);
  }, [data, query]);
  return (
    <>
      <div className="container1">
        <h2 style={{ color: "#fff" }}>{title}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {filterData.map((series) => {
            return (
              <>
              <Link to={`/${series._id}`}>
                <div className="box">
                
                  <img src={series.thumbnail} alt="" className="img1"/>
                </div>
                </Link>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Api;