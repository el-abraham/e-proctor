import { Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import useUserActions from "../_actions/user.actions";
import {
  userInfoState,
  UserInfoStateEnum,
  userLoading,
  userState,
} from "../_state/user.state";

type ProtectedRouteProps = {
  outlet: JSX.Element;
  roles?: string[];
};

export const ProtectedRoute = ({ outlet, ...props }: ProtectedRouteProps) => {
  const userActions = useUserActions();
  const userLogged = useRecoilValue(userState);
  const [state, setState] = useRecoilState(userInfoState);

  useEffect(() => {
    const load = async () => {
      if (userLogged != null) {
        setState((prev) => (prev = UserInfoStateEnum.LOADED));
      } else {
        if (userActions.checkToken()) {
          setState((prev) => (prev = UserInfoStateEnum.LOADING));
          const result = await userActions.refresh();
          if (result) {
            setState((prev) => (prev = UserInfoStateEnum.LOADED));
            return;
          }
        }
        setState((prev) => (prev = UserInfoStateEnum.UNDEFINED));
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (state == UserInfoStateEnum.LOADED) {
      const checkRole = (roles: string[], userRoles: string[] | string) => {
        if (Array.isArray(userRoles)) {
          for (let i = 0; i < userRoles.length; i++) {
            if (roles.includes(userRoles[i])) {
              return true;
            }
          }
          return false;
        }
        return roles.includes(userRoles);
      };
      if (props.roles != undefined && props.roles.length) {
        if (!checkRole(props.roles, userLogged!.role)) {
          setState((prev) => (prev = UserInfoStateEnum.FORBIDDEN));
        }
      }
    }
  }, [state]);

  return (
    <Fragment>
      {state == UserInfoStateEnum.LOADED ? (
        outlet
      ) : state == UserInfoStateEnum.LOADING ? (
        <LoadingScreen />
      ) : state == UserInfoStateEnum.FORBIDDEN ? (
        <ForbiddenScreen />
      ) : (
        <Navigate to={{ pathname: "/login" }} />
      )}
    </Fragment>
  );
};

const LoadingScreen = () => {
  return <div>Loading...</div>;
};

const ForbiddenScreen = () => {
  return <div>Forbidden...</div>;
};
