import './App.css';
// import CardView from './components/card/card';
import CardList from './components/cardlist/cardlist';
import Header from './components/header/header';
/**
 *
 * @return {ReactDOM}
 */
function App() {
  return (
    <div className="App">
      <Header className = "Header"/>
      <div className="ListWrapper">
        <CardList/>
      </div>
    </div>
  );
}

export default App;
