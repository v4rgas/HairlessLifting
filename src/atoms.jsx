import { atom } from "jotai";

export const darkModeAtom = atom(window.matchMedia('(prefers-color-scheme: dark)').matches)