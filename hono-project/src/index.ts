import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/json', (c) => {
  return c.json({hello: "Hono2!"});
})


app.get('/html', (c) => {
  return c.html(`
    <html>
      <head>
        <title>test</title>
      </head>
      <body>
        <h1>test</h1>
        <p>test</p>
      </body>
    </html>
  `)
})

app.get('/htmlnumbers', (c) => {
  const numbers = ['one', 'two', 'three']

  return c.html(`
    <html>
      <head>
        <title>test</title>
      </head>
      <body>
        <h1>test</h1>
        ${numbers.map((num) => '<p>' + num + '</p>').join('\\n')}
      </body>
    </html>
  `)
})


app.get('/print-headers', (c) => {
  return c.html(`
    <html>
      <head>
      </head>
      <body>
        <h1>Headers</h1>
        <pre>
${JSON.stringify(c.req.raw.headers, null, 2)}
        </pre>
      </body>
    </html>`)
})



export default app
