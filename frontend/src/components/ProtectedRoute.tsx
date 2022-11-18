import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useUserActions from "../_actions/user.actions";
import { userState } from "../_state/user.state";

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const userLogged = useRecoilValue(userState);
  const userActions = useUserActions();
  const [loading, setLoading] = useState(true);
  // const curentUser = useRecoilValue(userCurentState);

  useEffect(() => {}, [userLogged]);

  if (userLogged != null) {
    return outlet;
  } else {
    if (userActions.checkToken()) {
      userActions.refresh();
      // console.log(check);
    }
    return;
    // return <Navigate to={{ pathname: "/login" }} />;
  }
};
