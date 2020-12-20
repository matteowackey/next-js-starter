import "bulma/css/bulma.css"
// import { Auth0Provider } from "../contexts/auth0-context"
import { Auth0Provider } from "@auth0/auth0-react"
function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri="http://localhost:3000/"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
