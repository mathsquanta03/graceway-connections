export interface User {
  id: string;
  name: string;
  mobile: string;
  email: string;
  role: "admin" | "user";
  initials: string;
  notificationPreferences: {
    sms: boolean;
    whatsapp: boolean;
    email: boolean;
  };
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Samuel Johnson",
    mobile: "1234567890",
    email: "samuel@example.com",
    role: "admin",
    initials: "SJ",
    notificationPreferences: {
      sms: true,
      whatsapp: true,
      email: true,
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    mobile: "9876543210",
    email: "jane@example.com",
    role: "user",
    initials: "JS",
    notificationPreferences: {
      sms: true,
      whatsapp: false,
      email: true,
    },
  },
];

export const getCurrentUser = (): User | null => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? mockUsers[0] : null;
};

export const getGreeting = (name: string): string => {
  const hour = new Date().getHours();
  if (hour < 12) return `Good morning, ${name}`;
  if (hour < 18) return `Good afternoon, ${name}`;
  return `Good evening, ${name}`;
};