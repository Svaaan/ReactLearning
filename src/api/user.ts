import { mockedUsers } from "../MockData/MockedUsers";

export async function loginUser(email: string, password: string) {
  const user = mockedUsers.find((u) => u.email === email && u.password === password);
  if (user) {
    return {
      success: true,
      user: user
    } as const
  }
  return {
    success: false,
    error: "User not found"
  } as const
}