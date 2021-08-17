import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/header/navbar'
import MainPiece from './Components/main-piece/MainPiece'
import LineBreak from './Components/LineBreak/LineBreak';
import FeaturedGames from './Components/FeaturedGames/FeaturedGames';
import News from './Components/News/News';
import ImageBreak from './Components/ImageBreak/ImageBreak';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPiece />
      <LineBreak line='Featured Games' />
      <FeaturedGames />
      <LineBreak line='News'/>
      <News/>
      <ImageBreak image='https://static.wixstatic.com/media/bc9d97_b82bad3f1c38450785da09f6c8862096~mv2.jpg/v1/fill/w_980,h_189,al_c,q_90/archangel_hellfire.webp'/>
      <LineBreak line='Latest Games'/>
    </div>
  );
}

export default App;
