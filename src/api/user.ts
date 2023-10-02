import { mockedUsers } from "../MockData/MockedUsers";

export async function loginUser(email: string, password: string) {
  const user = mockedUsers.find((u) => u.email === email && u.password === password);
  if (user) {
    return {
      success: true,
      user: user
    } as const;
  } else {
    return {
      success: false,
      error: "Wrong email or password"
    } as const;
  }
}

