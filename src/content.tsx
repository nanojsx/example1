import { Component } from 'nano-jsx'

export const getPathName = (path: string) => {
  return path === '/' ? 'home' : path.replace('/', '')
}

export class Content extends Component {
  render() {
    return <div id="content">{this.props.content}</div>
  }
}
