export declare interface userProps {
  name?: string | null | undefined;
  balance?: number | null | undefined;
  email?: string | null | undefined;
}

export interface UserActionsContextType {
  userActions: boolean;
  setUserActions: React.Dispatch<React.SetStateAction<boolean>>;
}
