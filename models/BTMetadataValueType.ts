/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const BTMetadataValueType = {
    String: 'STRING',
    Bool: 'BOOL',
    Int: 'INT',
    Double: 'DOUBLE',
    Date: 'DATE',
    Enum: 'ENUM',
    Object: 'OBJECT',
    Blob: 'BLOB',
    User: 'USER',
    List: 'LIST',
    Foreign: 'FOREIGN',
    Category: 'CATEGORY',
    Computed: 'COMPUTED',
    ValueWithUnits: 'VALUE_WITH_UNITS'
} as const;
export type BTMetadataValueType = typeof BTMetadataValueType[keyof typeof BTMetadataValueType];


export function BTMetadataValueTypeFromJSON(json: any): BTMetadataValueType {
    return BTMetadataValueTypeFromJSONTyped(json, false);
}

export function BTMetadataValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMetadataValueType {
    return json as BTMetadataValueType;
}

export function BTMetadataValueTypeToJSON(value?: BTMetadataValueType | null): any {
    return value as any;
}
