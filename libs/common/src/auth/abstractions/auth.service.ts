import { Observable } from "rxjs";

import { UserId } from "../../types/guid";
import { AuthenticationStatus } from "../enums/authentication-status";

export abstract class AuthService {
  /** Authentication status for the active user */
  abstract activeAccountStatus$: Observable<AuthenticationStatus>;
  /**
   * Returns an observable authentication status for the given user id.
   * @note userId is a required parameter, null values will always return `AuthenticationStatus.LoggedOut`
   * @param userId The user id to check for an access token.
   */
  abstract authStatusFor$(userId: UserId): Observable<AuthenticationStatus>;
  /** @deprecated use {@link activeAccountStatus$} instead */
  abstract getAuthStatus: (userId?: string) => Promise<AuthenticationStatus>;
  abstract logOut: (callback: () => void) => void;
}
