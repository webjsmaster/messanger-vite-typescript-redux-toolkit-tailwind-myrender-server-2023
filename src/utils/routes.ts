import { IRoute, Path } from '../types/router';
import { Auth, Message, Profile } from '../pages';

export const routes: IRoute[] = [
  {
    path: Path.MESSAGE_ROUTE,
    Component: Message,
  },
  {
    path: Path.PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: Path.LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: Path.REGISTRATION_ROUTE,
    Component: Auth,
  },
];
