interface User {
  _id: string;
  name: string;
  email: string;
  image: string; // Add image field
}

interface UsersPageProps {
  initialUsers: User[];
  total: number;
}
