/**
 * Client for GeoServer namespace
 *
 * @module NamespaceClient
 */
export default class NamespaceClient {
    /**
     * Creates a GeoServer REST NamespaceClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns all namespaces.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object describing the namespace
     */
    getAll(): any;
    /**
     * Creates a new namespace.
     *
     * @param {String} prefix Prefix of the new namespace
     * @param {String} uri Uri of the new namespace
     *
     * @throws Error if request fails
     *
     * @returns {String} The name of the created namespace
     */
    create(prefix: string, uri: string): string;
    /**
     * Returns a namespace.
     *
     * @param {String} name Name of the namespace
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object describing the namespace or undefined if it cannot be found
     */
    get(name: string): any;
    /**
     * Deletes a namespace.
     *
     * @param {String} name Name of the namespace to delete
     *
     * @throws Error if request fails
     */
    delete(name: string): Promise<void>;
}
//# sourceMappingURL=namespace.d.ts.map