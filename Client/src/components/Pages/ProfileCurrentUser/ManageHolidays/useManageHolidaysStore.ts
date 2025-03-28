import { create } from "zustand";

interface ManageHolidaysModalStore {
  isManageHolidaysModalOpen: boolean;
  openManageHolidaysModal: () => void;
  closeManageHolidaysModal: () => void;
}

const useManageHolidaysStore = create<ManageHolidaysModalStore>((set) => ({
  isManageHolidaysModalOpen: false,
  openManageHolidaysModal: () => set({ isManageHolidaysModalOpen: true }),
  closeManageHolidaysModal: () => set({ isManageHolidaysModalOpen: false }),
}));

export default useManageHolidaysStore;
