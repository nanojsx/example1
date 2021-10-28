import Nano, { render } from 'nano-jsx'
import { Content } from './content'
import { Navbar } from './navbar'

// we only hydrate the Navbar and the Content component
render(<Navbar />, document.getElementById('navbar'))
render(<Content />, document.getElementById('content'))

console.log('successfully hydrated!')
