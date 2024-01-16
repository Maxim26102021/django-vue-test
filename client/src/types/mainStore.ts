import { useMainStore } from '@/store'
import { defineStore } from 'pinia'
import { NullStore } from './common'

type MainStore = ReturnType<typeof useMainStore>
export type MainStoreSGA = Omit<MainStore, keyof NullStore>


export type User = {
    name: string
    description: string
}


export interface MainState {
    user: User[]
}
