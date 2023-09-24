// Define a TypeScript interface to represent user login data
export interface User {
    name: string;
    lastName: string;
    age: number;
    country: string;
    address: string;
    employmentStatus: string;
    email: string;
    password: string;
  }
  
  // Mocked user login data
  export const mockedUsers: User[] = [
    {
      name: 'John',
      lastName: 'Doe',
      age: 28,
      country: 'United States',
      address: '123 Main St, Apt 4B',
      employmentStatus: 'Working',
      email: 'john.doe@example.com',
      password: 'secure123',
    },
    {
      name: 'Alice',
      lastName: 'Smith',
      age: 24,
      country: 'Canada',
      address: '456 Elm Rd, Unit 7C',
      employmentStatus: 'Student',
      email: 'alice.smith@example.com',
      password: 'p@ssw0rd',
    },
    {
      name: 'Bob',
      lastName: 'Johnson',
      age: 32,
      country: 'United Kingdom',
      address: '789 Oak Ave, Flat 3',
      employmentStatus: 'Working',
      email: 'bob.johnson@example.com',
      password: 'secret@123',
    },
    {
      name: 'Eva',
      lastName: 'Garcia',
      age: 22,
      country: 'Spain',
      address: '101 Pine Lane, Apt 2D',
      employmentStatus: 'Student',
      email: 'eva.garcia@example.com',
      password: 'eva2023',
    },
  ];
  
