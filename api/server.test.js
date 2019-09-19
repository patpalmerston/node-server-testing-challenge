const request = require('supertest')
const server = require('./server')

describe('server.js', () => {
  it('should see the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })
})