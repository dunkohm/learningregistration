import './App.css';
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      <nav>
        <div className="logo">KAUKI'S</div>
        
      </nav>
      <h3 className="register-heading">
        Please register here for the legibility to make orders and purchases.
      </h3>
     <div className="form-wrap">
      
      <form>
        <h2>Register</h2>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Username"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="passsword" placeholder="Confirm Password"></input>
        <input type="button" value="Register"></input>
      </form>
      </div> 
    </div>
  );
}

export default App;
