import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage("darkMode", window.matchMedia('(prefers-color-scheme: dark)').matches)
export const splitsAtom = atomWithStorage("splits", [])