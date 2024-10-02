import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
const Browse = () => {

 useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundaryContainer />
    </div>
  );
};

export default Browse;
