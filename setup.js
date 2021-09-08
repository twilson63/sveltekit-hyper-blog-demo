import fetch from 'node-fetch'

const url = 'http://localhost:6363/data/blog'
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
  .then(() => fetch(url, { method: 'PUT' })) // create db
  .then(() => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  }))