import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../MockData/MockedUsers";

type UserContextType = {
  user: User;
  setUser: (newUser: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(
    {
        name: "",
        lastName: "",
        age: 8,
        country: "",
        address: "",
        employmentStatus: "",
        email: "",
        password: ""
  
    },
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCustomerContext(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "to use UserContext you must place it inside UserProvider tagsen"
    );
  }
  return context;
}
