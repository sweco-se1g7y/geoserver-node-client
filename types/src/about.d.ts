/**
 * Client for GeoServer "about" endpoint
 *
 * @module AboutClient
 */
export default class AboutClient {
    /**
     * Creates a GeoServer REST AboutClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Get the GeoServer version.
     *
     * @throws Error if request fails
     *
     * @returns {Object} The version of GeoServer
     */
    getVersion(): any;
    /**
     * Checks if the configured GeoServer REST connection exists.
     *
     * @returns {Boolean} If the connection exists
     */
    exists(): boolean;
}
//# sourceMappingURL=about.d.ts.map