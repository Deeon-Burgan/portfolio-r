import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/header/navbar'
import MainPiece from './Components/main-piece/MainPiece'
import LineBreak from './Components/LineBreak/LineBreak';
import FeaturedGames from './Components/FeaturedGames/FeaturedGames';
import News from './Components/News/News';
import ImageBreak from './Components/ImageBreak/ImageBreak';
import Gallery from './Components/Gallery/Gallery';
import GamePitch from './Components/GamePitch/GamePitch';
import FlagBreak from './Components/FlagBreak/FlagBreak';
import LandingAbout from './Components/LandingAbout/LandingAbout';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingAbout/>
      <LineBreak line='Skills'/>
      <Skills/>
      <LineBreak line='Portfolio' />
      <MainPiece />
      <LineBreak line='Featured Projects' />
      <FeaturedGames />
      <LineBreak line='Blog'/>
      <News/>
      {/* <ImageBreak image='https://static.wixstatic.com/media/bc9d97_b82bad3f1c38450785da09f6c8862096~mv2.jpg/v1/fill/w_980,h_189,al_c,q_90/archangel_hellfire.webp'/> */}
      <FlagBreak/>
      <LineBreak line='Projects'/>
      <Gallery />
      {/* <Project/> */}
      {/* <GamePitch 
      overlayImage='https://static.wixstatic.com/media/bc9d97_fd690a5bfe5d4ad4a6ea2e85f0f2c02a~mv2.png/v1/crop/x_24,y_110,w_2284,h_1679/fill/w_612,h_440,al_c,q_95/CMAMP_F03_PNG-24_edited.webp'
      image='https://static.wixstatic.com/media/474ccd_3157b0bb2754425da6f6235aa811e455~mv2.png/v1/fill/w_1903,h_437,al_c,q_95/474ccd_3157b0bb2754425da6f6235aa811e455~mv2.webp' 
      tagline='Build, Gather, And Fight' 
      description='Strategic construction, careful resource management, and rapid recruitment are the keys to surviving unrelenting swarms of Nightmares, with robust defences to build, battleworn heroes to enlist, and the tug of war between light and dark to master'/> */}
    </div>
  );
}

export default App;
