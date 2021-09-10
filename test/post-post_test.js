import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { post } from '../src/routes/api/posts/index.js'


test('should create post successfully', async () => {
  const response = await post({ body: {} })
  assert.ok(response.ok)
})

test.run()