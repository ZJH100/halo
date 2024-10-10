/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { Post } from '../models';
// @ts-ignore
import { PostList } from '../models';
/**
 * PostV1alpha1Api - axios parameter creator
 * @export
 */
export const PostV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Post
         * @param {Post} [post] Fresh post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost: async (post?: Post, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(post, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Post
         * @param {string} name Name of post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePost: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deletePost', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Post
         * @param {string} name Name of post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPost: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPost', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List Post
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch Post
         * @param {string} name Name of post
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchPost: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchPost', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Post
         * @param {string} name Name of post
         * @param {Post} [post] Updated post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePost: async (name: string, post?: Post, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updatePost', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/posts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(post, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostV1alpha1Api - functional programming interface
 * @export
 */
export const PostV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Post
         * @param {Post} [post] Fresh post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPost(post?: Post, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPost(post, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.createPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete Post
         * @param {string} name Name of post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePost(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePost(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.deletePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Post
         * @param {string} name Name of post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPost(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPost(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.getPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List Post
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPost(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPost(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.listPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch Post
         * @param {string} name Name of post
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchPost(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchPost(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.patchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update Post
         * @param {string} name Name of post
         * @param {Post} [post] Updated post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePost(name: string, post?: Post, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePost(name, post, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostV1alpha1Api.updatePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PostV1alpha1Api - factory interface
 * @export
 */
export const PostV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostV1alpha1ApiFp(configuration)
    return {
        /**
         * Create Post
         * @param {PostV1alpha1ApiCreatePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost(requestParameters: PostV1alpha1ApiCreatePostRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.createPost(requestParameters.post, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Post
         * @param {PostV1alpha1ApiDeletePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePost(requestParameters: PostV1alpha1ApiDeletePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deletePost(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Post
         * @param {PostV1alpha1ApiGetPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPost(requestParameters: PostV1alpha1ApiGetPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.getPost(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List Post
         * @param {PostV1alpha1ApiListPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(requestParameters: PostV1alpha1ApiListPostRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PostList> {
            return localVarFp.listPost(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch Post
         * @param {PostV1alpha1ApiPatchPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchPost(requestParameters: PostV1alpha1ApiPatchPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.patchPost(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Post
         * @param {PostV1alpha1ApiUpdatePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePost(requestParameters: PostV1alpha1ApiUpdatePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Post> {
            return localVarFp.updatePost(requestParameters.name, requestParameters.post, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createPost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiCreatePostRequest
 */
export interface PostV1alpha1ApiCreatePostRequest {
    /**
     * Fresh post
     * @type {Post}
     * @memberof PostV1alpha1ApiCreatePost
     */
    readonly post?: Post
}

/**
 * Request parameters for deletePost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiDeletePostRequest
 */
export interface PostV1alpha1ApiDeletePostRequest {
    /**
     * Name of post
     * @type {string}
     * @memberof PostV1alpha1ApiDeletePost
     */
    readonly name: string
}

/**
 * Request parameters for getPost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiGetPostRequest
 */
export interface PostV1alpha1ApiGetPostRequest {
    /**
     * Name of post
     * @type {string}
     * @memberof PostV1alpha1ApiGetPost
     */
    readonly name: string
}

/**
 * Request parameters for listPost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiListPostRequest
 */
export interface PostV1alpha1ApiListPostRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof PostV1alpha1ApiListPost
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof PostV1alpha1ApiListPost
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof PostV1alpha1ApiListPost
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof PostV1alpha1ApiListPost
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof PostV1alpha1ApiListPost
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchPost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiPatchPostRequest
 */
export interface PostV1alpha1ApiPatchPostRequest {
    /**
     * Name of post
     * @type {string}
     * @memberof PostV1alpha1ApiPatchPost
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof PostV1alpha1ApiPatchPost
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updatePost operation in PostV1alpha1Api.
 * @export
 * @interface PostV1alpha1ApiUpdatePostRequest
 */
export interface PostV1alpha1ApiUpdatePostRequest {
    /**
     * Name of post
     * @type {string}
     * @memberof PostV1alpha1ApiUpdatePost
     */
    readonly name: string

    /**
     * Updated post
     * @type {Post}
     * @memberof PostV1alpha1ApiUpdatePost
     */
    readonly post?: Post
}

/**
 * PostV1alpha1Api - object-oriented interface
 * @export
 * @class PostV1alpha1Api
 * @extends {BaseAPI}
 */
export class PostV1alpha1Api extends BaseAPI {
    /**
     * Create Post
     * @param {PostV1alpha1ApiCreatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public createPost(requestParameters: PostV1alpha1ApiCreatePostRequest = {}, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).createPost(requestParameters.post, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Post
     * @param {PostV1alpha1ApiDeletePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public deletePost(requestParameters: PostV1alpha1ApiDeletePostRequest, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).deletePost(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Post
     * @param {PostV1alpha1ApiGetPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public getPost(requestParameters: PostV1alpha1ApiGetPostRequest, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).getPost(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List Post
     * @param {PostV1alpha1ApiListPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public listPost(requestParameters: PostV1alpha1ApiListPostRequest = {}, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).listPost(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch Post
     * @param {PostV1alpha1ApiPatchPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public patchPost(requestParameters: PostV1alpha1ApiPatchPostRequest, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).patchPost(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Post
     * @param {PostV1alpha1ApiUpdatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostV1alpha1Api
     */
    public updatePost(requestParameters: PostV1alpha1ApiUpdatePostRequest, options?: RawAxiosRequestConfig) {
        return PostV1alpha1ApiFp(this.configuration).updatePost(requestParameters.name, requestParameters.post, options).then((request) => request(this.axios, this.basePath));
    }
}

