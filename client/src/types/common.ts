import { defineStore } from "pinia"

type UseNullStore = ReturnType<typeof defineStore>
export type NullStore = ReturnType<UseNullStore>