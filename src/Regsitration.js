import React, { Component } from "react";
import { Link , useHistory as history ,withRouter} from "react-router-dom";


import './Regis.css'

export class Regsitration extends Component {
    
    constructor(){
        super();
        this.state={
            sname:'',
            email:'',
            password:'',
            Dfb:'',
            Phone:'',
            fmale:'',
            male:''  
        }
        // this.Register=this.Register.bind(this)
        this.handleClick=this.handleClick.bind(this);
        
    }
     handleClick(e) {
      e.preventDefault();
      console.log(this.state); 
      alert('Registration success') 
      this.props.history.push('/Paypal');
    }
  render() {
    return (
      <div>
        <div className="container">
          <form className="form-horizontal" role="form">
            <h2>Registration</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">
                Student Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Student Name"
                  className="form-control"
                  
                  onChange={(event)=> this.setState({ sname: event.target.value })  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-3 control-label">
                Email*
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  onChange={(event)=> this.setState({ email: event.target.value })  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">
                Password*
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(event)=> this.setState({ password: event.target.value })  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate" className="col-sm-3 control-label">
                Date of Birth*
              </label>
              <div className="col-sm-9">
                <input type="date" id="birthDate" className="form-control" 
                 onChange={(event)=> this.setState({ Dfb: event.target.value })  }/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="col-sm-3 control-label">
                Phone number{" "}
              </label>
              <div className="col-sm-9">
                <input
                  type="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone number"
                  className="form-control"
                  onChange={(event)=> this.setState({ Phone: event.target.value })  }
                />
                <span className="help-block">
                  Your phone number won't be disclosed anywhere{" "}
                </span>
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label col-sm-3">Gender</label>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input type="radio" id="femaleRadio" value="Female"
                       onChange={(event)=> this.setState({ fmale: event.target.value })  } />
                      Female
                    </label>
                  </div>
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input type="radio" id="maleRadio" value="Male" 
                       onChange={(event)=> this.setState({ male: event.target.value })  }/>
                      Male
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>
              Registration </button>
            <div className="card-footer">
            <Link to="/Paypal">Paypal</Link>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Regsitration);
