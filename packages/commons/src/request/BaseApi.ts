import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {createRequest, RequestOptions} from "./request";

export abstract class BaseTrionesApi {
    protected requestClient: AxiosInstance;

    constructor() {
        const options = {
            baseURL: this.baseUrl(),
            beforeRequest: this.beforeRequest.bind(this),
            onUnauthorized: this.onUnauthorized.bind(this)
        } as RequestOptions;
        this.requestClient = createRequest(options);
    }

    abstract baseUrl(): string;
    abstract beforeRequest(request: AxiosRequestConfig): Promise<AxiosRequestConfig>;
    abstract onUnauthorized(): Promise<void>;

    getUri(config?: AxiosRequestConfig): string {
        return this.requestClient.getUri(config);
    };

    request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.request(config);
    }

    get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.get(url, config);
    };

    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.delete(url, config);
    };

    head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.head(url, config);
    };

    options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.options(url, config);
    };

    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.post(url, data, config);
    };

    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.put(url, data, config);
    };

    patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.patch(url, data, config);
    };

    postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.postForm(url, data, config);
    };

    putForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.putForm(url, data, config);
    };

    patchForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.requestClient.patchForm(url, data, config);
    };
}
