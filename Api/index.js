import fastify from "fastify";
import logger from "./src/utils/logger.js";
import takenetRepositories from "./src/routes/takenet-repositories.js";

const server = fastify({ logger: logger });
server.log.info(`[SERVER] Starting...`);

server.register(takenetRepositories);
server.log.info(`[SERVER] Registering routes`);

server.listen({ port: 3000 }, (err, addr) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`[SERVER] Running at ${addr} at ${3000}`);
});




