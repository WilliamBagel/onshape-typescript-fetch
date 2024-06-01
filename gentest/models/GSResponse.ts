/**
 * Bug showing typescript not respecting default response
 * Sample bug - getSomethingOK and getSomethingBad should have same function signatures.
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* A result object.
*/
export class GSResponse {
    /**
    * Location of result.
    */
    'href'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return GSResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
