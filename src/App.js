import './App.css';
import Header from './componentes/Header/Header';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer />
      <br></br>
      <hr />
      <ItemDetailContainer />
    </>
  );
}

export default App;
