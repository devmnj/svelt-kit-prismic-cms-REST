import { error } from '@sveltejs/kit'

import createClient from '$lib/prismicio'

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ fetch, request }) {
   
  const client = createClient({ fetch, request })
  const documents = await client.getAllByType('post_type')

  if (documents) {
    return { documents }
  }

  error(404, 'Not found')
}