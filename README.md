Dropdown Menu<br>
- LOGIC: Giống như jQuery trước đây, nhưng **reactJS** quản lý state<br>
**ở jQuery** cho 1 tag html `display: none`, khi click vào thì thay đổi thành `display: block`<br>
**ở ReactJS** cho 1 tag html state là `false` khi click vào thì change thành state `true` => hiển thị
- Cần cài đặt react-router-dom<br>
```sh
$ npm install --save react-router-dom
```
- Ở trang **App.js**
```js
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <DropdownMenu />
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exaxt path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
```

- Ở trang component **DropdownMenu**
```js
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
```