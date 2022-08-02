import { useState } from "react"

export default function Navbar(props) {

  

  const [dark, setDark] = useState(true);

  function handleIcon() {
    setDark(dark ? false : true)
  }

  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">The Web Journal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/XRegiGigaSX/The_Web_Journal">GitHub </a>
                </li>
                <li className="nav-item dark">
                  <button type="button" className="btn btn-dark" onClick={() => {
                    props.setTheme();
                    handleIcon();
                  }}> {dark ? "☀️" : "🌑"}</button>
                </li>
                <li className="nav-item">
                {props.clock}
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input onChange={props.handleChange} id="query" className="form-control me-2" type="search" placeholder="Search for a topic" aria-label="Search" />
                <button onClick={props.handleSubmit} className="btn btn-outline-primary" >Search</button>
              </form>
            </div>
          </div>
        </nav>
    </header>
  )
}
