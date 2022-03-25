import * as prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_REPO_NAME);
  const client = prismic.createClient(endpoint);

  client.enableAutoPreviewsFromReq(req);

  return client;
}
