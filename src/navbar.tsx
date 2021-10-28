import Nano, { Component } from 'nano-jsx'
import { Link } from './link'

export class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}
