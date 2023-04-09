const LRU = require("lru-cache");

const cache = new LRU();
const defaultTtlMinutes = 15;
const DATOCMS_URL = "https://graphql.datocms.com/"

exports.handler = async ({ body }) => {
  const { query, accessToken } = JSON.parse(body || "") || {};
  let content;

  if (cache.has(query)) {
    content = cache.get(query);
  } else {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);

    content = await fetch(DATOCMS_URL, {
      headers,
      body: JSON.stringify({query}),
      method: "POST"
    }).then(response => {
      return response.json()
    }).then(result => {
      return result.data
    })

    const ttl = defaultTtlMinutes * 60 * 1000;
    cache.set(query, content, ttl);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ content }),
  };
};