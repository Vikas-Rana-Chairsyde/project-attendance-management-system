import logo from './logo.svg';
import './App.css';
import Button from './component/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => { alert('Button is clicked') }}>hello</Button>
        <Button style={{ background: 'black', color: 'white', padding: 15, margin: 10 }}>hello</Button>
        <Button size="small" style={{ background: "pink", color: "red" }}>Small</Button>
        <Button size="medium" >Medium</Button>
        <Button variant="outlined" style={{ color: "red" }}>Outlined</Button>
        <Button variant="contained" style={{ background: "#F26522", color: "#FFF", border: "1px solid #F26522", padding: "4px 50px", borderRadius: "5px", fontSize: "14px", fontWeight: 600,cursor:"pointer" }}>Punch Out</Button>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button style={{background: "#F26522", color: "#FFF" , marginTop:10, fontSize:"11px" ,fontWeight:700 ,border: "1px solid #F26522",borderRadius: "5px",padding:"5px 6px", textAlign:"center" ,cursor:"pointer"}}>Approve</Button>
          <Button style={{background: "#FFF", color: "#F26522",marginTop:10,fontSize:"11px" ,fontWeight:700 ,border: "0.1px solid #F26522",borderRadius: "5px",padding:"5px 6px", textAlign:"center",transition: "0.5s",cursor:"pointer" ,}}>Decline</Button>
        </div>
        <Button className="Button">-</Button>
      </header>
    </div>
  );
}
export default App;
