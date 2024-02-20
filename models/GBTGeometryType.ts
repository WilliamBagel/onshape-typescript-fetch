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


/**
 * 
 * @export
 */
export const GBTGeometryType = {
    Line: 'LINE',
    Circle: 'CIRCLE',
    Arc: 'ARC',
    Plane: 'PLANE',
    Cylinder: 'CYLINDER',
    Cone: 'CONE',
    Sphere: 'SPHERE',
    Torus: 'TORUS',
    Spline: 'SPLINE',
    Ellipse: 'ELLIPSE',
    Mesh: 'MESH',
    Conic: 'CONIC',
    Revolved: 'REVOLVED',
    Extruded: 'EXTRUDED',
    AllMesh: 'ALL_MESH',
    MixedMesh: 'MIXED_MESH',
    SplineInternalPoint: 'SPLINE_INTERNAL_POINT',
    SplineControlPolygon: 'SPLINE_CONTROL_POLYGON',
    EllipticalArc: 'ELLIPTICAL_ARC',
    Unknown: 'UNKNOWN'
} as const;
export type GBTGeometryType = typeof GBTGeometryType[keyof typeof GBTGeometryType];


export function GBTGeometryTypeFromJSON(json: any): GBTGeometryType {
    return GBTGeometryTypeFromJSONTyped(json, false);
}

export function GBTGeometryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTGeometryType {
    return json as GBTGeometryType;
}

export function GBTGeometryTypeToJSON(value?: GBTGeometryType | null): any {
    return value as any;
}

