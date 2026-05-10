import { ReactNode } from "react";
import { UserProvider } from "./userContext";
import { WordThemeProvider } from "./wordThemeContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <WordThemeProvider>{children}</WordThemeProvider>
    </UserProvider>
  );
}
