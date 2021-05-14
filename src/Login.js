import React, { Component } from 'react'
import './Regis.css'
import {withRouter} from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div>
                 <div className="container">
          <form className="form-horizontal" role="form">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  id="sname"
                  placeholder="Email"
                  className="form-control"
                  
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="class name" className="col-sm-3 control-label">
                Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  id="classname"
                  placeholder="Password"
                  className="form-control"   
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.props.history.push('/Home')}>
              Login
            </button>
          </form>
        </div>
            </div>
        )
    }
}

export default withRouter(Login)
