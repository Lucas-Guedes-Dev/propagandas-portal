import { create } from 'zustand';

interface AuthTone {
    token: string;
    setToken: (color: string) => void;
}

export const useToken = create<AuthTone>((set) => ({
    token: '',
    setToken: (token) => set((state) => ({ ...state, token: token })),
}));
