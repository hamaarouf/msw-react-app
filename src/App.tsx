import './App.css';
import Client from './components/Client';

function App() {
  const myClient = {
    numeroRc: "string",
    description: "string",
    ifu: "string",
    ice: "string"
  }

  return (
    <div className="App">
     <Client {...{clientData: myClient}} />
    </div>
  );
}

export default App;
