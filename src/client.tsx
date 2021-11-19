import { render } from 'nano-jsx'
import { Content, getPathName } from './content'
import { Navbar } from './navbar'

const main = async () => {
  // we only hydrate the Navbar and the Content component
  render(<Navbar />, document.getElementById('navbar'))

  // fetch and render the content
  const renderContent = async () => {
    const page = getPathName(window.location.pathname)
    const res = await fetch('/api/' + page)
    const content = await res.text()
    render(<Content content={content} />, document.getElementById('content'))
  }
  await renderContent()

  // listen for route change
  window.addEventListener('pushstate', () => {
    renderContent()
  })

  // done
  console.log('successfully hydrated!')
}

main()
