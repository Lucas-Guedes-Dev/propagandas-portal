import { create } from 'zustand';

interface PageState {
    page: string;
    setPage: (page: string) => void;
}

export const usePage = create<PageState>((set) => ({
    page: '/home',
    setPage: (page) => set((state) => ({ ...state, page: page })),
}));
