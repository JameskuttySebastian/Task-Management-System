
import React from 'react'
import "./login.css"

function Login() {
    return (
        <div>
            <div className="sidenav">
         <div className="login-main-text">
            <h2>Application Login Page</h2>
            
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"></input>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
                  </form>
            </div>
         </div>
      </div>

        </div>
    )
}

export default Login


