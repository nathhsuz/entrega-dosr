import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


function App() {
  return (
  <div>
    <Navbar />
    <ItemListContainer />
    <ItemDetailContainer />
  </div>
  );
}

export default App;
