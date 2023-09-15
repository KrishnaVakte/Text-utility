import React from 'react'

export default function N3reavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About us</a>
            </li>
            <div className="form-check form-switch" data-bs-theme={props.mode} style={{position:'absolute',right:'20px',}}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" style={{color:(props.mode==='light'? 'black':'white'),}} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'? 'dark': 'light'} mode </label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

