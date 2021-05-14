import React, { Component } from "react";
import { Link , useHistory as history } from "react-router-dom";
import './Regis.css'
export class Home extends Component {
    
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
//  console.log(this.state); 
 alert('Edit Succesfully') 
 
}  
  render() {
    return (
      <div>
        <div className="container">
          <form className="form-horizontal" role="form">
              <div className="CardBody">
            <h2>Profile</h2>
            </div>
            <div className="form-group">
                <div className="col-sm-3"></div>
            <img src="logo192.png" alt="Avatar" className="form-control avatar col-sm-3"/>
            <div className="col-sm-3">
            <label for="formFileSm" class="form-label">Edit Image</label>
            <input className="form-control form-control-sm-2" id="formFileSm" type="file" />
            </div>
            
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">
                Previou Class
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
                Session-Year
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
                Current Class
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
                Curren-Session
              </label>
              <div className="col-sm-9">
                <input
                  type="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone number"
                  className="form-control"
                  onChange={(event)=> this.setState({ Phone: event.target.value })  }
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>
               Submit
               </button>
          </form>
        </div>
        </div>
    );
  }
}

export default Home;
