import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.scss';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <p>React Responsive Navigation</p>
            <em>
              <div className="letterhead">
                <span className="name">kentorry</span>
                <span className="gray">.io</span>
              </div>
            </em>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    )
  }
}

export default DropdownMenu;