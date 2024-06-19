import { createClient } from '@sanity/client'

const client = createClient({
   projectId: 'reat5lqr',
   dataset: 'production',
   useCdn: false,
   apiVersion: '2024-06-08'
})

export default client