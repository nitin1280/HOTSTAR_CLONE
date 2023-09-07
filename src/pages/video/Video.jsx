import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Video.css";
import Navbar from "../../components/navbar/Navbar";

const Video = () => {
  const [productData, setproductData] = useState([]);
  const { url } = useParams();
  useEffect(() => {
    (async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${url}`,
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
  }, [url]);
  return (
    <>
      <div>
        <Navbar/>
        <div className="VideoPlayer">
          <video src={productData?.video_url} controls>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Video;