import { create } from "zustand";

export type State = {
  page: number;
  hasMore: boolean;
};

export type Actions = {
  incrementPage: () => void;
  decrementPage: () => void;
  setHasMore: (hasMore: boolean) => void;
};

export const usePaginationStore = create<State & Actions>((set) => ({
  page: 1,
  hasMore: true,
  incrementPage: () => {
    set((state: any) => {
      state.page = state.page + 1;
      return { page: state.page };
    });
  },
  decrementPage: () => {
    set((state: any) => {
      if (state.page !== 1) {
        state.page = state.page - 1;
        return { page: state.page };
      }
      return { page: 1 };
    });
  },
  setHasMore: (hasMore: boolean) => set({ hasMore }),
}));
