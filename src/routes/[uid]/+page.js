import { error } from '@sveltejs/kit'
import createClient from '$lib/prismicio'

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ fetch, request,params }) {
   
  const client = createClient({ fetch, request })
  const document   = await client.getByUID('post_type', params.uid) 
console.log(document);
  if (document) {
    return { document }
  }

  error(404, 'Not found')
}