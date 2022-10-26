// @ts-nocheck
import * as prismic from '@prismicio/client'
 
// Fill in your repository name
 

export const STICKY_POST=`query  {
    allPost_types(first:1,sortBy: meta_lastPublicationDate_ASC, where: {sticky_post: true}) {
      totalCount
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          title
          post_excerpt
          featured_img_link {
            ... on _ExternalLink {
              url
            }
          }
        }
      }
    }
  }`;

export const ALL_POSTS = `query {
allPost_types(where: {sticky_post: false}) {
edges {
node {
_meta {
firstPublicationDate
id
uid
}
title
post_excerpt
featured_img_link {
...on _ExternalLink{
url
}
}
}
}
}
}
`;

const repoName = 'jsuu' // Fill in your repository name
const accessToken = '' // If your repository is private, add an access token
  
const routes = [
  {
    type: 'post_type',
    path: '/',
  },
  {
    type: 'post_type',
    path: '/:uid',
  },
]

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client
}

export default createClient