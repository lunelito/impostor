import { ReactNode } from "react";
import { UserProvider } from "./userContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <UserProvider>{children}</UserProvider>;
}
