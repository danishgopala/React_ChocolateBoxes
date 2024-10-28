import './App.css';
import Header from "./Header.js"
import ChocList from "./ChocList.js"
function App() {
  const headingTitle = "Chocolate Boxes"
  return (
    <div className="App">
        <Header headingText = {headingTitle}/>
        <ChocList/>
    </div>
  );
}

export default App;
