import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {

const showGptSearch = useSelector((store) => store.gpt.showGptSearch);



 useNowPlayingMovies();
 usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch?(
        <GptSearch />
        ) : ( 
        <>
        <MainContainer />
      <SecoundaryContainer />
      </>
    )}
      
    </div>
  );
};

export default Browse;
