import React, { Component } from "react";
import "./Regis.css";
import { withRouter } from "react-router-dom";

export class Paypal extends Component {
  constructor(){
    super();
    this.state={
        sname:'',
        clname:'',
        famount:'',
          
    }
    // this.Register=this.Register.bind(this)
    this.handleClick=this.handleClick.bind(this);
    
}

  handleClick(e) {
    e.preventDefault();
     console.log(this.state);
    alert("Fees submited");
     this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="container">
          <form className="form-horizontal" role="form">
            <h2>Paypal</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">
                Student Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="sname"
                  placeholder="Student Name"
                  className="form-control"
                  onChange={(event)=> this.setState({ sname: event.target.value })  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="class name" className="col-sm-3 control-label">
                class Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="classname"
                  placeholder="classname"
                  className="form-control"
                  onChange={(event)=> this.setState({ clname: event.target.value })  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Amount" className="col-sm-3 control-label">
                Fees Amount
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="fname"
                  placeholder="Fees Amount"
                  className="form-control"
                  onChange={(event)=> this.setState({ fname: event.target.value })  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.handleClick}
            >
              Submit
            </button>
            {/* <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={() => this.props.history.push("/")}
            >
              Login
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Paypal);
