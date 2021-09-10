import hyper from '$lib/utils.js'
import postSchema from '$lib/post-schema.js'

export async function put({ params, body }) {
  // validate body
  try {
    const post = postSchema.parse(body)
    const response = await hyper.data.update(params.id, post)
    if (response.ok) {
      return {
        body: await response.json()
      }
    } else {
      return {
        status: response.statusCode,
        body: await response.json()
      }
    }
  } catch (e) {
    if (e.issues) {
      return {
        status: 400,
        body: { message: 'bad request', issues: e.issues }
      }
    }
  }
}

export async function get({ params }) {
  const response = await hyper.data.get(params.id)
  if (response.ok) {
    return {
      body: await response.json()
    }
  }
  return {
    status: 404,
    body: 'not found!'
  }
}