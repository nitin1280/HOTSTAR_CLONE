import React from 'react'
import Api from '../api/Api'
const NewDisney = () => {
  return (
    <div>

<Api query={"trailer"} title={"Trending"} />
      <Api query={"web series"} title={"Web Series"} />;
      <Api query={"tv show"} title={"Tv Show"} />;
      <Api query={"short film"} title={"Short Film"} />;
      <Api query={"movie"} title={"Movies"}/>
      <Api query={"documentary"} title={"Documentary"}/>
      <Api query={"video song"} title={"Videosong"}/>
    </div>
  )
}

export default NewDisney