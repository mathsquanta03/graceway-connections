export interface User {
  id: string;
  name: string;
  mobile: string;
  role: "admin" | "user";
  initials: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    mobile: "1234567890",
    role: "admin",
    initials: "JD",
  },
  {
    id: "2",
    name: "Jane Smith",
    mobile: "9876543210",
    role: "user",
    initials: "JS",
  },
];

export const getCurrentUser = (): User | null => {
  // Mock getting the current user - in real app this would check auth state
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? mockUsers[0] : null;
};