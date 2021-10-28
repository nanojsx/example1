import Nano, { Component } from 'nano-jsx'
import * as Router from 'nano-jsx/lib/components/router'

export class Content extends Component {
  render() {
    return (
      <div id="content">
        <Router.Switch fallback={() => <div>404 (not found)</div>}>
          <Router.Route exact path="/">
            <div>Home Page</div>
          </Router.Route>
          <Router.Route exact path="/about">
            <div>About Page</div>
          </Router.Route>
          <Router.Route exact path="/contact">
            <div>Contact Page</div>
          </Router.Route>
        </Router.Switch>
      </div>
    )
  }
}
