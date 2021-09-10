import fetch from 'node-fetch'

const dataUrl = 'http://localhost:6363/data/blog'
const searchUrl = 'http://localhost:6363/search/blog'
const post = {
  id: '2',
  type: 'post',
  title: 'Hello World',
  author: 'internet',
  date: new Date().toISOString(),
  tags: ['about'],
  status: 'published',
  content: '# Hello World'
}
// 1. create our database
// 2. load it with a post
Promise.resolve()
  .then(() => fetch(dataUrl, { method: 'PUT' })) // create db
  .then(() => fetch(dataUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })).catch(e => e) // create search index
  /*
.then(() => fetch(searchUrl, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: { fields: ['title', 'content'] }
}))
*/