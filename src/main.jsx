import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../src/components/Auth/LoginButton.jsx";
import LogoutButton from "../src/components/Auth/LogoutButton.jsx";
import Profile from "../src/components/Auth/Profile.jsx";



import './index.css'
import App from './App.jsx'

const domain = "dev-hfdnvtxtw50pczuq.us.auth0.com";
const clientId = "yJWEAGzkkCItpx94VBxkg3nsBlysUAbT";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
      <p>------------------------------------------</p>
      <LoginButton />
      <p>------------------------------------------</p>
      <p>------------------------------------------</p>
      <LogoutButton />
      <p>------------------------------------------</p>
      <p>------------------------------------------</p>
      <p>------------------------------------------</p>
      <Profile/>
    </Auth0Provider>
  </StrictMode>
);
