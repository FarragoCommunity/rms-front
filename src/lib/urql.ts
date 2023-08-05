import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
    _client = createClient({
      url: "https://fuzzy-leggings-lion.cyclic.cloud/",
      requestPolicy: "cache-first",
      exchanges: [fetchExchange , cacheExchange],
      fetchOptions : {
        cache : "no-cache"
      }
    });
  }
  const client = _client;
  return { client };
};