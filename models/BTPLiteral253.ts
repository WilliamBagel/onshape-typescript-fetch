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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
 BTPExpression9SuperToJSON,
} from './BTPExpression9';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

import {
     BTPLiteralArray254FromJSONTyped,
    BTPLiteralArray254ToJSON,
     BTPLiteralBoolean255FromJSONTyped,
    BTPLiteralBoolean255ToJSON,
     BTPLiteralMap256FromJSONTyped,
    BTPLiteralMap256ToJSON,
     BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
     BTPLiteralString259FromJSONTyped,
    BTPLiteralString259ToJSON,
     BTPLiteralUndefined260FromJSONTyped,
    BTPLiteralUndefined260ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTPLiteral253
 */
export interface BTPLiteral253 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPLiteral253
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTPLiteral253 interface.
 */
export function instanceOfBTPLiteral253(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteral253FromJSON(json: any): BTPLiteral253 {
    return BTPLiteral253FromJSONTyped(json, false);
}

export function BTPLiteral253FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteral253 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPLiteralArray-254') {
            return BTPLiteralArray254FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteralBoolean-255') {
            return BTPLiteralBoolean255FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteralMap-256') {
            return BTPLiteralMap256FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteralNumber-258') {
            return BTPLiteralNumber258FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteralString-259') {
            return BTPLiteralString259FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteralUndefined-260') {
            return BTPLiteralUndefined260FromJSONTyped(json, true);
        }
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTPLiteral253SuperToJSON(value?: BTPLiteral253 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9SuperToJSON(value),
        'btType': value.btType,
    };
}



export function BTPLiteral253ToJSON(value?: BTPLiteral253 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTPLiteralArray-254') {
        return BTPLiteralArray254ToJSON(value);
    }
    if (value.btType === 'BTPLiteralBoolean-255') {
        return BTPLiteralBoolean255ToJSON(value);
    }
    if (value.btType === 'BTPLiteralMap-256') {
        return BTPLiteralMap256ToJSON(value);
    }
    if (value.btType === 'BTPLiteralNumber-258') {
        return BTPLiteralNumber258ToJSON(value);
    }
    if (value.btType === 'BTPLiteralString-259') {
        return BTPLiteralString259ToJSON(value);
    }
    if (value.btType === 'BTPLiteralUndefined-260') {
        return BTPLiteralUndefined260ToJSON(value);
    }
    return BTPLiteral253SuperToJSON(value);
}
