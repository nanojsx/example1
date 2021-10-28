import Nano, { Component } from 'nano-jsx'
import { Navbar } from './navbar'
import { Content } from './content'
import { Footer } from './footer'

export class App extends Component {
  render() {
    return (
      <div id="root">
        <header>
          <div id="logo">LOGO</div>
          <Navbar />
        </header>
        <Content content={this.props.content} />
        <Footer />
      </div>
    )
  }
}
