import { create } from "zustand";

interface AddUserModalStore {
  isAddUserModalOpen: boolean;
  openAddUserModal: () => void;
  closeAddUserModal: () => void;
}

const useAddUserModal = create<AddUserModalStore>((set) => ({
  isAddUserModalOpen: false,
  openAddUserModal: () => set({ isAddUserModalOpen: true }),
  closeAddUserModal: () => set({ isAddUserModalOpen: false }),
}));

export default useAddUserModal;
