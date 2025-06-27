/**
 * Client for GeoServer "Reset/Reload" to clear internal caches and reload
 * configuration from disk endpoint.
 *
 * @module ResetReloadClient
 */
export default class ResetReloadClient {
    /**
     * Creates a GeoServer REST ResetReloadClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Resets all store, raster, and schema caches. This operation is used to
     * force GeoServer to drop all caches and store connections and reconnect to
     * each of them the next time they are needed by a request.
     * This is useful in case the stores themselves cache some information about
     * the data structures they manage that may have changed in the meantime.
     *
     * @throws Error if request fails
     */
    reset(): Promise<void>;
    /**
     * Reloads the GeoServer catalog and configuration from disk. This operation
     * is used in cases where an external tool has modified the on-disk
     * configuration. This operation will also force GeoServer to drop any
     * internal caches and reconnect to all data stores.
     *
     * @throws Error if request fails
     */
    reload(): Promise<void>;
}
//# sourceMappingURL=reset-reload.d.ts.map