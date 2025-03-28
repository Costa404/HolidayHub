import { useDeleteUser } from "../../../Api/delete/deleteUser";
import { useFetchUsers } from "../Users/useFetchUsers";

export const useAdminDashboard = () => {
  const { users, fetchUsers, loading: isLoadingUsers } = useFetchUsers();
  const { deleteUser, loading: isDeletingUser } = useDeleteUser();

  const handleDeleteUser = async (userid: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user? This action is irreversible."
    );
    if (!confirmation) return;

    try {
      await deleteUser({ userid });

      // eslint-disable-next-line no-self-assign
      window.location.href = window.location.href;
    } catch (error) {
      console.error("Error deleting user:", error);

      await fetchUsers();
    }
  };

  return {
    users,
    handleDeleteUser,
    isLoading: isLoadingUsers || isDeletingUser,
  };
};
