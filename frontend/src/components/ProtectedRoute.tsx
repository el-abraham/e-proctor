import { Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import useUserActions from "../_actions/user.actions";
import { userInfoState, UserInfoStateEnum, userLoading, userState } from "../_state/user.state";

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const userActions = useUserActions();
  const userLogged = useRecoilValue(userState);
  const [state, setState] = useRecoilState(userInfoState);

  useEffect(() => {
    const load = async () => {
      if (userLogged != null) {
        setState(prev => prev = UserInfoStateEnum.LOADED);
      } else {
        if (userActions.checkToken()) {
          setState(prev => prev = UserInfoStateEnum.LOADING)
          const result = await userActions.refresh();
          if (result) {
            setState(prev => prev = UserInfoStateEnum.LOADED);
            return;
          }
        } else {
          setState(prev => prev = UserInfoStateEnum.UNDEFINED)
        }
      }
    }
    load()
  }, [])

  return (
    <Fragment>
      {
        state == UserInfoStateEnum.LOADED ?
          outlet : state == UserInfoStateEnum.LOADING ? <LoadingScreen /> : <Navigate to={{ pathname: "/login" }} />
      }
    </Fragment>
  )
};

const LoadingScreen = () => {
  const userLogged = useRecoilValue(userState);
  return <div>Loading...</div>
}
