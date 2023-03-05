import { Hono } from 'hono';
import { logger } from 'hono/logger';

type Bindings = {
  wsh2023: KVNamespace;
};

const operations = ['GetRecommendations', 'GetFeatureSections'];

const app = new Hono<{ Bindings: Bindings }>();

app.post('/graphql', logger(), async (c) => {
  const data = (await c.req.raw.clone().json()) as Record<string, any>;
  const operationName = data['operationName'];

  if (operations.includes(operationName)) {
    const cachedJSONString = await c.env.wsh2023.get(operationName);
    console.log(cachedJSONString);
    let json: object = {};
    if (cachedJSONString) {
      json = JSON.parse(cachedJSONString);
    } else {
      const response = await fetch(c.req.raw.clone());
      json = await response.json();
      c.executionCtx.waitUntil(c.env.wsh2023.put(operationName, JSON.stringify(json)));
    }
    return c.json(json);
  }

  const response = await fetch(c.req.raw);
  const newResponse = new Response(response.body, response);
  return newResponse;
});

app.onError((e, c) => {
  console.log(e);
  return c.json({ message: 'error' });
});

export default app;
