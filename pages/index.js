import React, { useContext, useEffect } from "react"
import "bulma/css/bulma.css"
// import { useAuth0 } from "../contexts/auth0-context"
import { useAuth0 } from "@auth0/auth0-react"
function App() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0()
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    error,
  } = useAuth0()
  console.log("isAuthenticated :: ", isAuthenticated)
  console.log("isLoading :: ", isLoading)

  // Custom facebook
  // https://dev-0kis-gom.eu.auth0.com/authorize?response_type=code&client_id=iHewTdYXPMGgv24KYpUPq6Lrt51Yq6PE&connection=facebook&redirect_uri=http://localhost:3000/&state=STATE

  return (
    <>
      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {isLoading && <div>Loading ...</div>}
            {!isLoading && !user && (
              <>
                <h1>Click Below!</h1>
                <button
                  onClick={loginWithRedirect}
                  className="button is-danger"
                >
                  Login
                </button>
              </>
            )}
            {error && (
              <>
                <div>Oops... {error.message}</div>;
              </>
            )}

            {!isLoading && user && (
              <>
                <h1>You are logged in!</h1>
                <p>Hello {user.name}</p>

                {user.picture && <img src={user.picture} alt="My Avatar" />}
                <hr />

                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="button is-small is-dark"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default App
