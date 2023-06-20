/**
 * User Info
 */
export interface UserInfo {
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    irctc_id?: string;
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_in: number;
    task_id?: string;
    user_token?: string;
    trainman_access_token?: string;
  }