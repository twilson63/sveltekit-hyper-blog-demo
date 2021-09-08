import hyper from '$lib/utils.js'

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