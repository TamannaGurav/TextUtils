import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  //creating  a state for mode
  // const [mode, setMode] = useState(true);
  // const [textMode, setTextMode] = useState('Dark Mode');
  // // const[btnColor, setBtnColor] = useState({
  // //   color: '#09326b',
  // // })

  // const toggleMode = ()=>{
  //   if(mode === true){
  //     setMode(false);
  //     console.log("Dark mode activated!")
  //     setTextMode('Light Mode');
  //     document.body.style.backgroundColor = "black"
  //     document.body.style.color = "white"
  //     // setBtnColor({
  //     //   color: '#fff', // Set the button color for dark mode
  //     // });
  //   }
  //   else{
  //     setMode(true);
  //     console.log("Light mode activated!")
  //     setTextMode('Dark Mode');
  //     document.body.style.backgroundColor = ""
  //     document.body.style.color = ""
  //     // setBtnColor({
  //     //   color: '#09326b',
  //     // });
  //   }
  // }
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            
          </ul>

          <form className="d-flex ms-3 me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
          <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className='form-check-label text-light' htmlFor="flexSwitchCheckDefault">{props.toggleMode}Dark Mode</label>
              </div>
        </div>
      </div>
    </nav>
    {/* {console.log(typeof props)} */}
    
    </>
  )
}


Navbar.propTypes = {
    // this is used for type checking of propTypes
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About"
// }//wont be used in further releases w ecan use default parameters instead in javascript.