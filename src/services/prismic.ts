import * as prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT);
  client.enableAutoPreviewsFromReq(req);

  // const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
  //   req,
  //   accessToken: process.env.PRISMIC_ACCESS_TOKEN
  // });

  return client;
}
