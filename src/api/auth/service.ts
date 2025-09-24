export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
};

const users: User[] = [];

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  role?: string;
}): Promise<User> => {
  const user: User = {
    id: users.length + 1,
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role || 'Submitter',
    createdAt: new Date(),
  };
  users.push(user);
  return user;
};

 
export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = users.find(u => u.email === email);
  return user || null;
};
