import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import { dracula } from "./colorSchemes";

export const darkModeAtom = atomWithStorage("darkMode", window.matchMedia('(prefers-color-scheme: dark)').matches)
export const splitsAtom = atomWithStorage("splits", {})
export const colorSchemeAtom = atomWithStorage("colorScheme", dracula)
export const workoutSessionsAtom = atomWithStorage("workoutSessions", {})