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



/**
 * 
 * @export
 * @interface Metadata
 */
export interface Metadata {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Metadata
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    'creationTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    'deletionTimestamp'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Metadata
     */
    'finalizers'?: Array<string> | null;
    /**
     * The name field will be generated automatically according to the given generateName field
     * @type {string}
     * @memberof Metadata
     */
    'generateName'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Metadata
     */
    'labels'?: { [key: string]: string; };
    /**
     * Metadata name
     * @type {string}
     * @memberof Metadata
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof Metadata
     */
    'version'?: number | null;
}

