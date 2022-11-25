const fastify = require('fastify')({ logger: true })
const DrinkService = require('./services/api')


const drinkService = new DrinkService()

fastify.get('/homepage', async (request, reply) => {
  return await drinkService.getHomepage()
})

fastify.get('/drink/search', async (request, reply) => {
  return await drinkService.search(request.query.search)
})

fastify.get('/drink/:id', async (request, reply) => {
  return await drinkService.getById(request.params.id)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()