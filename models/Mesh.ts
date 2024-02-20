/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.176.31157-f17972084104
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MeshPrimitive } from './MeshPrimitive';
import {
    MeshPrimitiveFromJSON,
    MeshPrimitiveFromJSONTyped,
    MeshPrimitiveToJSON,
} from './MeshPrimitive';

/**
 * 
 * @export
 * @interface Mesh
 */
export interface Mesh {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Mesh
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Mesh
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof Mesh
     */
    name?: string;
    /**
     * 
     * @type {Array<MeshPrimitive>}
     * @memberof Mesh
     */
    primitives?: Array<MeshPrimitive>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Mesh
     */
    weights?: Array<number>;
}

/**
 * Check if a given object implements the Mesh interface.
 */
export function instanceOfMesh(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeshFromJSON(json: any): Mesh {
    return MeshFromJSONTyped(json, false);
}

export function MeshFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mesh {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'primitives': !exists(json, 'primitives') ? undefined : ((json['primitives'] as Array<any>).map(MeshPrimitiveFromJSON)),
        'weights': !exists(json, 'weights') ? undefined : json['weights'],
    };
}

export function MeshToJSON(value?: Mesh | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extensions': value.extensions,
        'extras': value.extras,
        'name': value.name,
        'primitives': value.primitives === undefined ? undefined : ((value.primitives as Array<any>).map(MeshPrimitiveToJSON)),
        'weights': value.weights,
    };
}

