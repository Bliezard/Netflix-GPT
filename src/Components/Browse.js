import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundaryContainer />
    </div>
  );
};

export default Browse;
