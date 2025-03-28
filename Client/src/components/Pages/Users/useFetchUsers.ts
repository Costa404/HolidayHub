import { useEffect, useState } from "react";
import { UserType } from "../../../Utility/Interface/GlobalInterface";
import { useCurrentUser } from "../../../context/useCurrentUserAuth";

export function useFetchUsers() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useCurrentUser();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/usersInfo", {});

      if (!response.ok) throw new Error("Error fetching users");

      const data = await response.json();

      const filteredUsers = data.filter(
        (user: UserType) => user.username !== currentUser?.username
      );

      setUsers([...filteredUsers]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentUser]);

  return { users, loading, error, fetchUsers, setUsers };
}
