import hyper from '$lib/utils.js'

export async function post({ body }) {
  // validate document
  const response = await hyper.data.add(body)
  if (response.ok) {
    return {
      body: await response.json()
    }
  }
}


export async function get() {

  const response = await hyper.data.query({ type: 'post' })

  if (response.ok) {
    const { docs } = await response.json()
    return {
      body: docs
    }
  }

  return {
    status: 404,
    body: 'Not Found!'
  }
}