const URL = svc => `${process.env['HYPER']}/${svc}/blog` // add env
const headers = {
  'Content-Type': 'application/json'
}

export default {
  data: {
    query: (selector) => fetch(`${URL('data')}/_query`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ selector })
    }),
    get: (id) => fetch(`${URL('data')}/${id}`),
    add: (post) => fetch(URL('data'), {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
    }),
    update: (id, doc) => fetch(`${URL('data')}/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(doc)
    }),
    remove: (id) => fetch(`${URL('data')}/${id}`, {
      method: 'DELETE',
      headers
    })
  },
  /*
  search: {
    index: (key, doc) => fetch(`${URL('search')}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ key, doc })
    }),
    query: (query) => fetch(`${URL('search')}/_query`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query
      })
    })
  }
  */
}