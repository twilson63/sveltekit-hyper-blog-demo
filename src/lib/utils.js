const URL = `${process.env['HYPER']}/data/blog` // add env
const headers = {
  'Content-Type': 'application/json'
}

export default {
  data: {
    query: (selector) => fetch(`${URL}/_query`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ selector })
    }),
    get: (id) => fetch(`${URL}/${id}`),
    add: (post) => fetch(`${URL}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
  }
}