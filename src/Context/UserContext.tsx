import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../MockData/MockedUsers";
import { loginUser } from "../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserFromAsyncStorage, storeUser } from "../../AsyncStorage";

type UserContextType = {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
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
      try {
        await storeUser(result.user);
        const userFromAsyncStorage = await getUserFromAsyncStorage();
        if (userFromAsyncStorage) {
          setUser(userFromAsyncStorage);
        }
      } catch (e) {
        console.log("kunde inte lägga till i async storage");
      }
    } else {
      console.log(result.error);
      return result.success;
    }
    return result.success;
  };


  //Att den hämtar usern från async storage regelbundet kanske?

  // const = async () => {
  //   const user = await getUserFromAsyncStorage();
  //   if(user){
  //     setUser(user);
  //   }
  // }

  // useEffect(() => {

  // }, []); 

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
      "To use UserContext, you must place it inside UserProvider."
    );
  }
  return context;
}
