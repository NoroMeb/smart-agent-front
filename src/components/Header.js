import { Link } from "react-router-dom";
function Header() {

  return (
    <header className='header'>
      <div class="logo">
        <h1 className="logo-text">Smart</h1>
        <h1 className="logo-text">Agent</h1>
      </div>
      <div className="buttons">
        <button className='how-it-works'>Fund us</button>
        <button className='how-it-works'>Whitepaper</button>
        <button className='how-it-works'>Smart contract</button>
        <button className='how-it-works'>How it works</button>
        <Link to={"/dashboard"} target="_blank"><button className='launch-app' >Start App</button></Link>
      </div>
    </header>
  );
}

export default Header;