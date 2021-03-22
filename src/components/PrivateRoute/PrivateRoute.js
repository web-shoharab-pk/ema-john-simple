import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContaxt } from "../../App";

function PrivateRoute({ children, ...rest }) {
     const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;