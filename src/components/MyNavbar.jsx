import {
  Navbar,
  Nav,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Netflix from "../assets/Netflix.svg";
import { BsBellFill } from "react-icons/bs";
import React from "react";
import Gallerie from "./Gallerie";
import GallerieRow from "./GallerieRow";

class MyNavbar extends React.Component {
  state = {
    search: "",
    loading: false,
  };

  setSearch(e) {
    if (e.key === "Enter") {
      this.setState({ search: e.target.value, loading: true });
      return this.props.searchValue(e.target.value);
    } else {
      this.setState({ search: e.target.value, loading: false });
    }
  }

  render() {
    return (
      <>
        <Navbar className="Navbar" variant="dark" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src={Netflix} alt="logo" className="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="App.js">Home</Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav className="ml-auto pr-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="dropdownMenu"
                aria-label="Search"
                onKeyUp={(e) => this.setSearch(e)}
              />

              <Nav.Link href="#" className="pl-3">
                {" "}
                KIDS{" "}
              </Nav.Link>

              <Nav.Link>
                <BsBellFill />
              </Nav.Link>

              <DropdownButton
                title="User"
                menuAlign="right"
                id="dropdown-menu-align-right"
                variant="bg-dark"
                style={{ color: "white!important" }}
              >
                <Dropdown.Item href="#action/3.1">User</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">Manage Profile</Dropdown.Item>
                <Dropdown.Item href="#action/3.3">Help Center</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">Signout Netlix</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <div className='p-3'>
                { this.state.loading ?
                    <GallerieRow search={this.state.search} />
                    :
                    <Gallerie />
                }</div> */}
      </>
    );
  }
}

export default MyNavbar;
