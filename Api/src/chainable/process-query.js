import queryFiveOldest from "./../actions/query-five-oldest.js";
import filterData from "./../actions/filter-data.js";

export default function processQueryChain(fastify) {
  let queried, filtered;

  return {
    async query() {
      try {
        queried = await queryFiveOldest(fastify);
        return this;
      } catch (error) {
        fastify.log.error("[ERROR]First step of query chain did not run", error);
        return this;
      }
    },

    filter() {
      try {
        if(queried) {
          filtered = filterData(queried);
          return this;
        }
  
        throw new Error("No data to be queried");
      } catch(error) {
        fastify.log.error("[ERROR] Second step of the query chain did not run", error.message);
        return this;
      }
    },

    collect() {
      return filtered;
    }
  }  
}