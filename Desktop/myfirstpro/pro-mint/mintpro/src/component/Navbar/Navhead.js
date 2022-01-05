import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navhead.scss";

import wallet from "../../images/wallet.svg";
import cartIcon from "../../images/CartIcon.svg";
import donload from "../../images/download.png";
import logo1 from "../../images/logo1.png";

function Navhead() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark" fixed="top">
        <div className="container-fluid card-mr">
          <Navbar.Brand href="#home" className="top-logo">
            <img className="mr-logo" src={logo1} /> 
          </Navbar.Brand>
          <div className="icon-for">
            <button className="btn text-light  nav_bell" type="button">
              <i className="fas fa-bell">
                <span className="bell_0 text-light"> 10</span>
              </i>
            </button>
            <img
              className="img-wallet mar-01"
              className="wakk"
              alt=""
              src={wallet}
            />
            <img className="img-cart mar-01" alt="" src={cartIcon} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link className="text-light market-1 Mint-link">
                Marketplace
              </Nav.Link>
              <Nav.Link className=" text-light Mint-link">
                How it works
              </Nav.Link>
              <Nav.Link className="text-light Mint-link">Be a Star</Nav.Link>
              <Nav.Link href="#pricing" className=" text-light Mint-link">
                Resorces
              </Nav.Link>
              <div className="mobile-btn">
                <button type="button" className="btn btn-connect-wallet">
                  <span className="btn-wallet">
                    <strong className="font-for">Stakehub</strong>
                  </span>
                </button>
              </div>
              <div className="mobile-btn">
                <button
                  type="button"
                  id="btn-57-nav"
                  className="mt-57 btn   bg-colr text-light"
                >
                  <span className="btn-waal">
                    <strong className="text-light font-for">
                      $10,000 NFTB
                    </strong>
                  </span>
                </button>
              </div>
              <div className="mobile-btn">
                <button
                  type="button"
                  id="btn-57-nav"
                  className="mt-57 btn  btn-connect-wallet btn-ox"
                >
                  <span className="btn-wallet">
                    <strong className="font-for">0xBBB6...E96e </strong>
                    <img className="mar-bot" src={donload} alt="" />
                  </span>
                </button>
              </div>
              <div className="mobile-btn ">
                <button
                  className="btn text-light  nav_bell btn-for-0"
                  type="button"
                >
                  <i className="fas fa-bell ">
                    <span className="bell_0 text-light btn-for-0"> 10</span>
                  </i>
                </button>
                <img
                  className="img-wallet mar-01 "
                  className="wakk btn-for-0"
                  alt=""
                  src={wallet}
                />
                <img
                  className="img-cart mar-01 btn-for-0 "
                  alt=""
                  src={cartIcon}
                />
              </div>
              <span></span>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navhead;
