import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../MockData/MockedUsers";
import { loginUser } from "../api/user";

type UserContextType = {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "",
    lastName: "",
    age: 8,
    country: "",
    address: "",
    employmentStatus: "",
    email: "",
    password: "",
  });

  const login = async (email: string, password: string) => {
    const result = await loginUser(email, password);
    if (result.success) {
      setUser(result.user);
    } else {
      // setErrorMessage(result.error);
    }
    return result.success;
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "to use UserContext you must place it inside UserProvider tagsen"
    );
  }
  return context;
}
