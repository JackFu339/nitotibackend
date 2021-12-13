import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./route.constants";
import Loader from "@iso/components/utility/loader";

const Dashboard = lazy(() => import("./containers/Dashboard/Dashboard"));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING, //登入
    exact: true,
    component: lazy(() => import("@iso/containers/Pages/SignIn/SignIn")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_404, //404
    component: lazy(() => import("@iso/containers/Pages/404/404")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_500, //500
    component: lazy(() => import("@iso/containers/Pages/500/500")),
  },
  {
    path: PUBLIC_ROUTE.SIGN_IN, //登入
    component: lazy(() => import("@iso/containers/Pages/SignIn/SignIn")),
  },
  {
    path: PUBLIC_ROUTE.SIGN_UP, //登入
    component: lazy(() => import("@iso/containers/Pages/SignUp/SignUp")),
  },
  {
    path: PUBLIC_ROUTE.FORGET_PASSWORD, //忘記密碼
    component: lazy(() =>
      import("@iso/containers/Pages/ForgotPassword/ForgotPassword")
    ),
  },
  {
    path: PUBLIC_ROUTE.RESET_PASSWORD, //重置密碼
    component: lazy(() =>
      import("@iso/containers/Pages/ResetPassword/ResetPassword")
    ),
  },
  {
    path: PUBLIC_ROUTE.AUTH0_CALLBACK,
    component: lazy(() =>
      import("@iso/containers/Authentication/Auth0/Auth0Callback")
    ),
  },
  {
    path: PUBLIC_ROUTE.UPLOAD,
    component: lazy(() => import("@iso/containers/Pages/upload.ao")),
  },
];

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
