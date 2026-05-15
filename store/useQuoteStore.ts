'use client';
import { create } from 'zustand';

type State = {
  quote: string;
  category: string;
  mood: string;
  typography: string;
  sky: string;
  background: string;
  loading: boolean;
  set: (p: Partial<State>) => void;
};

export const useQuoteStore = create<State>((set) => ({
  quote: 'Some silences\nhurt more\nthan goodbye.',
  category: 'Islamic',
  mood: 'Cinematic',
  typography: 'Playfair Display',
  sky: 'sunset sky',
  background: 'cinematic dark',
  loading: false,
  set: (p) => set(p),
}));
