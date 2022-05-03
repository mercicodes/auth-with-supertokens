import React from "react";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword, {
  signOut,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import BookStore from "./component/BookStore";
import Header from "./component/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "auth-application",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/api/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

/* Your App */
export default function App() {
  async function onLogout() {
    await signOut();
    window.location.href = "/";
  }

  return (
    <div>
      <Header onLogout={onLogout} />
      <BrowserRouter>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}

          <Route
            path="/"
            element={
              <EmailPassword.EmailPasswordAuth
                onSessionExpired={() => {
                  alert("Session expired!");
                }}
              >
                <BookStore />
              </EmailPassword.EmailPasswordAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
