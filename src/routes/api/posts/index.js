import hyper from '$lib/utils.js'
import postSchema from '$lib/post-schema.js'




export async function post({ body }) {
  try {
    const post = postSchema.parse(body) // validate document
    const response = await hyper.data.add(post)
    
    if (response.ok) {
      return {
        body: await response.json()
      }
    } else {
      return {
        status: 500,
        body: { ok: false, message: 'could not write to hyper' }
      }
    }
  } catch (e) {
    console.log(e.message)
    return {
      status: 400,
      body: { error: 'Bad Request!', issues: e.issues }
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