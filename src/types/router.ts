import React from 'react';

export interface IPath {
  MESSAGE_ROUTE: string;
  PROFILE_ROUTE: string;
  LOGIN_ROUTE: string;
  REGISTRATION_ROUTE: string;
}

export enum Path {
  MESSAGE_ROUTE = '/message',
  PROFILE_ROUTE = '/profile',
  LOGIN_ROUTE = '/login',
  REGISTRATION_ROUTE = '/registration',
}

export interface IRoute {
  path: Path;
  Component: React.FunctionComponent;
}
