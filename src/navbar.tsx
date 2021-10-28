import Nano, { Component } from 'nano-jsx'
import * as Router from 'nano-jsx/lib/components/router'

export class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Router.Link to="/">Home</Router.Link>
        <Router.Link to="/about">About</Router.Link>
        <Router.Link to="/contact">Contact</Router.Link>
      </div>
    )
  }
}
