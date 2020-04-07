import React, { SFC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Home from "../routes/Home";
import MovieDetail from "../routes/MovieDetail";
import Search from "../routes/Search";
import Header from "./Header";
// import LogIn from "../routes/LogIn";
// import Register from "../routes/Register";
// import Community from "../routes/Community";
// import Ticket from "../routes/Ticket";
// import Goods from "../routes/Goods";
// import CommunityAdd from "../routes/CommunityAdd";
// import CommunityDetail from "../routes/CommunityDetail";
// import CommunityEdit from "../routes/CommunityEdit";
// import PersonDetail from "../routes/PersonDetail";

const Container = styled.div`
  margin: 6rem auto 0;
  width: 60rem;
`;

interface IProps {
  isLoggedIn: boolean;
}

export const Router: SFC<IProps> = ({ isLoggedIn }) => (
  <>
    <Switch>
      {/* <Route path="/login" exact component={LogIn} />
      <Route path="/register" exact component={Register} /> */}
      <Route
        path={"*"}
        exact
        render={({ location }) => (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Container>
              <Switch>
                <Route path="/film/:id" exact component={MovieDetail} />
                <Route path="/" exact component={Home} />
                {/* <Route path="/person/:id" exact component={PersonDetail} /> */}
                <Route path="/films/year/:year" exact component={Home} />
                <Route path="/film" exact component={Home} />
                {/* <Route path="/community/add" exact component={CommunityAdd} />
                <Route
                  path="/community/edit/:postId"
                  exact
                  component={CommunityEdit}
                />
                <Route
                  path="/community/read/:postId"
                  exact
                  component={CommunityDetail}
                />
                <Route path="/community/:page" exact component={Community} /> */}
                <Redirect from="/community/*" to="/community/1" />
                {/* <Route path="/ticket" exact component={Ticket} />
                <Route path="/goods" exact component={Goods} /> */}
                <Route path="/search/:term" exact component={Search} />
                <Redirect from="*" to="/" />
              </Switch>
            </Container>
          </>
        )}
      />
    </Switch>
  </>
);
