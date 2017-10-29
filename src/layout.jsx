import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse } from 'reactstrap'

export default class Layout extends React.PureComponent {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" fixed="top" dark expand="md">
          <NavbarBrand href="/">KEMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">课程管理</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">订单管理</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">用户管理</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">商户管理</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">门店管理</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="container-fluid" style={{ paddingTop: 60 }}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    )
  }
}
