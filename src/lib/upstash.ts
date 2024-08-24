import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://calm-lamb-37842.upstash.io',
  token: 'AZPSAAIjcDFhMDA3NmQ3ZWFjYzk0ZDg3YWRiOTA5NjlmYjM0OWE0MXAxMA',
})

// const data = await redis.set('foo', 'bar');