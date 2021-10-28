import express from 'express'
import Nano, { renderSSR } from 'nano-jsx'
import { App } from './app'
import { join } from 'path'

const app = express()
const port = 3000

const css = /*css*/ `
body {
  padding: 2em;
  max-width: 500px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
}
header a {
  margin-left: 8px;
  padding: 4px;
  border: 1px black solid;
}
#content,
footer {
  margin-top: 32px;
}
`

const html = (app: string) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script async src="/js/bundle.js"></script>
      <style>${css}</style>
  </head>
  <body>
      ${app}
  </body>
  </html>`
}

app.use('/js', express.static(join(__dirname, 'js')))

app.get('*', (req, res) => {
  const app = renderSSR(<App />, { pathname: req.url })
  res.send(html(app))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
