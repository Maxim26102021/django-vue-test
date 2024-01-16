import axios, { AxiosInstance } from 'axios';
import { defineStore } from 'pinia';
import { useMainStore } from '@/store/'




interface CommonData<T> {
    id: number,
    data: T
}

export interface APICommand {
    route: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}


abstract class Client {
    protected api: AxiosInstance
    protected timeout: number
    private readonly apiPath: string | undefined
    readonly command: APICommand | null


    constructor() {
        this.command = null;
        this.apiPath = process.env.NODE_ENV === 'production' ? process.env.API : process.env.LOCAL_API;
        this.timeout = 1000;

        this.api = axios.create({
            baseURL: this.apiPath,
            timeout: this.timeout
        })
    }
}


export abstract class CommonService<Entity, Store> extends Client {
    public response: Entity | null
    protected store: Store | null
    public route: (string | '')

    constructor() {
        super();
        this.route = '';
        this.store = null;
        this.response = null;
    }

    async makeRequest(additionalUrl: string | null = null): Promise<Entity> {
        const { data } = await this.api.get<Entity>(additionalUrl || this.route);
        return data;
    }
}