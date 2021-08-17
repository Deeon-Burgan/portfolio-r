import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/header/navbar'
import MainPiece from './Components/main-piece/MainPiece'
import LineBreak from './Components/LineBreak/LineBreak';
import FeaturedGames from './Components/FeaturedGames/FeaturedGames';
import News from './Components/News/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPiece />
      <LineBreak line='Featured Games' />
      <FeaturedGames />
      <LineBreak line='News'/>
      <News/>
    </div>
  );
}

export default App;
