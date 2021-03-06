import React, { VFC } from "react";
import { Route, Switch } from "react-router-dom";
import MyPage from "../components/pages/MyPage";
import PostCreate from "../components/pages/PostCreate";
import PostView from "../components/pages/PostView";
import UserProfileEdit from "../components/pages/UserEditProfile";

export const AuthenticateRouter: VFC = () => {
  return (
    <Switch>
      <Route
        path="/posts"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={`${url}/create`}>
              <PostCreate />
            </Route>
            <Route exact path={`${url}/view/:id`}>
              <PostView />
            </Route>
          </Switch>
        )}
      />

      <Route
        path="/users"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={`${url}/profile/:id`}>
              <MyPage />
            </Route>
            <Route exact path={`${url}/profile/edit/:id`}>
              <UserProfileEdit />
            </Route>
          </Switch>
        )}
      />
    </Switch>
  );
};
