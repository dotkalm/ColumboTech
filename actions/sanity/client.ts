import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: true,
	apiVersion: '2021-11-15'
})

