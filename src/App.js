import logo from './logo.svg';
import './App.css';
function myproduct(){
    let product = ["product1","product2","product3"]
    return console.log(product)
}
function App() {
  return (
    <div className="App">
        {myproduct()}
    </div>
  );
}

export default App;
