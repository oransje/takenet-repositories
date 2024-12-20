import processQueryChain from "../chainable/process-query.js";

export default function takenetRepositories(fastify, _) {
  fastify.get('/repositories', async (request, reply) => {
    try {
      const queryResponse = await processQueryChain(fastify).query();
      const response = queryResponse.filter().collect();

      return response;
    } catch(error) {
      fastify.log.error("[TAKENET ROUTER] Error on completing the chain process");
      reply.status(500).send({ error: 'Internal Server Error' })
    }
  });
}