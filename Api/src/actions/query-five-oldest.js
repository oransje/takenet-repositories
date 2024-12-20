// This has to be done since apolloclient is a CommonJS module, which does not support
// modules in ES Syntax.
import pkg from "@apollo/client/core/core.cjs";
const { gql, ApolloClient, InMemoryCache } = pkg;


export default async function queryFiveOldest(fastify) {
  try {
    const response = await client.query({ query: GET_REPOSITORIES });

    return response.data;
  } catch (error) {
    fastify.log.error("[ERROR] Failed to fetch data");
    if(error.networkError) {
      fastify.log.error("[ERROR] NETWORK ERROR:", error.networkError.message);
    }

    if (error.graphQLErrors) {
      fastify.log.error("[ERROR] GraphQL Errors:");
      error.graphQLErrors.forEach((err) => {
        fastify.log.error("Error Message:", err.message);
        if (err.extensions) {
          fastify.log.error("Error Details:", err.extensions);
        }
      });
    } else {
      fastify.log.error("[ERROR] Unspecified Error", error.message);
    }
  }
};

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: "bearer " + process.env.GITHUB_API_KEY,
  },
});

const GET_REPOSITORIES = 
gql`
  {
    organization(login: "takenet") {
      repositories(first: 5, orderBy: {field: CREATED_AT, direction: ASC}) {
        nodes {
          createdAt
          name
          url
        }
      }
    }
  }
`;