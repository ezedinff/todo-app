// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'lji3j6edq0'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-hr-y714n.auth0.com',            // Auth0 domain
  clientId: 'zNWM8f0G21lpJfVBqZmPhqiANZOoCide',          // Auth0 client id
  callbackUrl: 'http://a8baa58f5a4764166943655a9dab4eae-1199825330.us-east-2.elb.amazonaws.com:8080/callback'
}
