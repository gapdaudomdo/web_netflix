
import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    
    <><div className="App">
    
    <App1/>
    </div></>
  );
}

export default App;

function App1() {
  return (
    <div>
      <Navbar />
    <Intro/>
    <Contents/>
    </div>
  )
}