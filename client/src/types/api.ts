import { AxiosRequestConfig } from "axios"

export interface APICommand {
    route: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export type RequestMethods = 'get' | 'post' | 'put' | 'delete'


export interface APIRequestOptions extends AxiosRequestConfig {
    debounce?: number
}


export interface ApiClientInitOptions<
    TCommands extends string
> {
    baseUrl: string
    timeout?: number
    commands: Record<TCommands, APICommand>
    headers?: Record<string, any>
}