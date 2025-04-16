import logo from './logo.svg';
import './App.css';
import Button from './component/button';
function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => {alert('Button is clicked')}}>hello</Button>
        <Button style = {{background:'black', color:'white', padding:15, margin:10}}>hello</Button>
      </header>
    </div>
  );
}

export default App;
