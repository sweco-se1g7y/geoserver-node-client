/**
 * Utility functions and classes
 */
/**
 * Return the GeoServer response text if available.
 *
 * @param {Response} response The response of the GeoServer
 *
 * @returns {String} The response text if available
 */
export function getGeoServerResponseText(response: Response): string;
/**
 * Generic GeoServer error
 */
export class GeoServerResponseError extends Error {
    /**
     * @param {String} [message=GeoServer Response Error] The error message
     * @param {String} [geoServerOutput] The error output from GeoServer (useful for debugging)
     */
    constructor(message?: string, geoServerOutput?: string);
    geoServerOutput: string;
}
//# sourceMappingURL=geoserver.d.ts.map