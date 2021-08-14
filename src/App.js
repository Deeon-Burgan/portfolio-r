import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/header/navbar'
import MainPiece from './Components/main-piece/MainPiece'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPiece />
    </div>
  );
}

export default App;
